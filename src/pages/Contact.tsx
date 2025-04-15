
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon!"
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-india-blue mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help you plan the perfect Indian adventure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-india-blue mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-india-orange/10 p-3 rounded-full mr-4">
                <MapPin className="text-india-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                <p className="text-gray-600">
                  123 Tourism Road, Connaught Place<br />
                  New Delhi, 110001<br />
                  India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-india-orange/10 p-3 rounded-full mr-4">
                <Mail className="text-india-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                <p className="text-gray-600">
                  info@indiatriptales.com<br />
                  support@indiatriptales.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-india-orange/10 p-3 rounded-full mr-4">
                <Phone className="text-india-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                <p className="text-gray-600">
                  +91 98765 43210<br />
                  +91 11 2345 6789
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p>Saturday: 10:00 AM - 4:00 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-india-blue mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Your Email <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="How can we help you?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-india-orange hover:bg-india-orange/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="mr-2">Sending...</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
      
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-india-blue mb-6 text-center">Find Us</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
          {/* In a real implementation, this would be a Google Map */}
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <p className="text-gray-600">[Google Map would be embedded here]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
