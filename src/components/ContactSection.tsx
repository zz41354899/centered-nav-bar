import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { z } from "zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: values.name,
        email: values.email,
        message: values.message,
      });

      if (error) {
        toast({
          title: "送出失敗",
          description: "系統發生錯誤，請稍後再試一次。",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "已送出訊息！",
        description: "感謝你的來信，我會盡快回覆。",
      });

      reset();
    } catch (err) {
      toast({
        title: "送出失敗",
        description: "無法連線到伺服器，請檢查網路或稍後再試。",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-heading font-bold mb-6 text-center text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a project in mind? Let's collaborate and create something amazing together.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              {...register("name")}
              className={cn(
                "bg-secondary/50 border-border focus:border-primary h-12 text-foreground placeholder:text-muted-foreground",
                errors.name && "border-destructive focus:border-destructive"
              )}
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              {...register("email")}
              className={cn(
                "bg-secondary/50 border-border focus:border-primary h-12 text-foreground placeholder:text-muted-foreground",
                errors.email && "border-destructive focus:border-destructive"
              )}
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              {...register("message")}
              rows={6}
              className={cn(
                "bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground resize-none",
                errors.message && "border-destructive focus:border-destructive"
              )}
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(143,255,0,0.3)]"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
