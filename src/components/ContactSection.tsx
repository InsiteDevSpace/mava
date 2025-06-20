import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: ''
    });
  };
  return <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-mava-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in partnering, investing, or learning more about MAVA's initiatives? Get in touch with our team.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          
        </div>
      </div>
    </section>;
};
export default ContactSection;