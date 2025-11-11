import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider mb-4">Get in touch</h6>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] mb-6">
                Don't hesitate to contact us for more information.
              </h2>
              <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Contact us
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider mb-4">Need help?</h6>
            <h3 className="text-2xl font-bold text-[#3a4d6f] mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 min-h-32"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#ec4899] hover:bg-[#db2777] text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;