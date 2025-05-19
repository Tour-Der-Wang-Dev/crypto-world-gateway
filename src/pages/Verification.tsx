
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerificationForm from "@/components/Verification/VerificationForm";
import VerificationStatus from "@/components/Verification/VerificationStatus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/ui/container";

const Verification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-infiworld-space-dark to-infiworld-blue-dark">
      <Navbar />
      <Container className="py-16">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-infiworld-gold to-infiworld-gold-light bg-clip-text text-transparent mb-4">
            Identity Verification
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Complete your verification process to unlock all features of InfiWorld Crypto Hub. Your data is securely encrypted and handled with the highest privacy standards.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md border border-infiworld-gold/20 rounded-xl p-6 shadow-lg">
          <Tabs defaultValue="verification" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="verification">Verification</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>
            <TabsContent value="verification">
              <VerificationForm />
            </TabsContent>
            <TabsContent value="status">
              <VerificationStatus />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Verification;
