
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from 'sonner';

const formSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  documentType: z.string(),
  documentNumber: z.string().min(5, 'Document number must be at least 5 characters'),
  country: z.string().min(2, 'Country must be specified')
});

type FormValues = z.infer<typeof formSchema>;

const VerificationForm = () => {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [selfieImage, setSelfieImage] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      documentType: 'passport',
      documentNumber: '',
      country: ''
    }
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (!frontImage || !selfieImage) {
      toast.error('Please upload the required documents');
      return;
    }

    // Here we would typically send the data to the server
    console.log({ ...data, frontImage, backImage, selfieImage });
    
    toast.success('Verification submitted successfully!', {
      description: 'We will review your documents and update your status shortly.'
    });

    // Reset the form
    form.reset();
    setFrontImage(null);
    setBackImage(null);
    setSelfieImage(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your legal full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Country of Residence</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="documentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Document Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select document type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="id_card">ID Card</SelectItem>
                    <SelectItem value="driver_license">Driver's License</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="documentNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Document Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter document number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Document Upload</h3>
          <p className="text-gray-300 text-sm">Please upload clear, high-resolution images of your documents</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
              <CardContent className="p-4">
                <div className="mb-2 text-center">
                  <h4 className="font-medium text-white">Front Side</h4>
                  <p className="text-xs text-gray-400">Required</p>
                </div>
                <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-infiworld-gold transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {frontImage ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                        <span className="text-xs text-gray-300">{frontImage.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-xs text-gray-400">Upload front side</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setFrontImage)}
                  />
                </label>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
              <CardContent className="p-4">
                <div className="mb-2 text-center">
                  <h4 className="font-medium text-white">Back Side</h4>
                  <p className="text-xs text-gray-400">If applicable</p>
                </div>
                <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-infiworld-gold transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {backImage ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                        <span className="text-xs text-gray-300">{backImage.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-xs text-gray-400">Upload back side</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setBackImage)}
                  />
                </label>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
              <CardContent className="p-4">
                <div className="mb-2 text-center">
                  <h4 className="font-medium text-white">Selfie with ID</h4>
                  <p className="text-xs text-gray-400">Required</p>
                </div>
                <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-600 rounded-md cursor-pointer hover:border-infiworld-gold transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {selfieImage ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                        <span className="text-xs text-gray-300">{selfieImage.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-xs text-gray-400">Upload selfie with ID</span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setSelfieImage)}
                  />
                </label>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-infiworld-gold to-infiworld-gold-light text-black hover:from-infiworld-gold-light hover:to-infiworld-gold transition-all"
          >
            Submit Verification
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default VerificationForm;
