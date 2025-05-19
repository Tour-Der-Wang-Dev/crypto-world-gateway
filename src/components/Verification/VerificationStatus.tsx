
import { AlertCircle, CheckCircle2, Clock3 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type StatusType = 'pending' | 'approved' | 'rejected' | 'not_started';

const VerificationStatus = () => {
  // For demo purposes, we're setting this to 'pending'
  // In a real app, this would come from your backend
  const status: StatusType = 'pending';
  
  const getStatusDetails = (status: StatusType) => {
    switch(status) {
      case 'pending':
        return {
          title: 'Verification in Progress',
          description: 'Your documents are being reviewed. This typically takes 24-48 hours.',
          icon: <Clock3 className="h-12 w-12 text-yellow-500" />,
          color: 'yellow',
          progress: 50
        };
      case 'approved':
        return {
          title: 'Verification Complete',
          description: 'Your identity has been successfully verified. You now have full access to all features.',
          icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
          color: 'green',
          progress: 100
        };
      case 'rejected':
        return {
          title: 'Verification Failed',
          description: 'There was an issue with your submitted documents. Please check the details below and resubmit.',
          icon: <AlertCircle className="h-12 w-12 text-red-500" />,
          color: 'red',
          progress: 0
        };
      case 'not_started':
      default:
        return {
          title: 'Not Started',
          description: 'You haven\'t submitted your verification documents yet.',
          icon: <AlertCircle className="h-12 w-12 text-gray-400" />,
          color: 'gray',
          progress: 0
        };
    }
  };

  const statusDetails = getStatusDetails(status);

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {statusDetails.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-medium text-white mb-2">{statusDetails.title}</h3>
              <p className="text-gray-300">{statusDetails.description}</p>
              <div className="mt-4">
                <Progress value={statusDetails.progress} className="h-2" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-400">Submitted</span>
                  <span className="text-xs text-gray-400">Reviewing</span>
                  <span className="text-xs text-gray-400">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white">Verification Steps</h3>
        
        <div className="grid gap-4">
          <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-green-500/20 p-2 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Document Submission</h4>
                  <p className="text-sm text-gray-300">Your documents have been successfully uploaded.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-yellow-500/20 p-2 rounded-full">
                  <Clock3 className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Document Verification</h4>
                  <p className="text-sm text-gray-300">Our team is reviewing your submitted documents.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-black/20 border-infiworld-gold/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-gray-600/20 p-2 rounded-full">
                  <Clock3 className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Identity Confirmation</h4>
                  <p className="text-sm text-gray-300">Final verification and account upgrade.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
        <div className="flex gap-3">
          <AlertCircle className="text-yellow-500 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-yellow-500">Need Help?</h4>
            <p className="text-sm text-gray-300">
              If you're facing any issues with your verification process, please contact our support team at <a href="mailto:support@infiworld.com" className="text-infiworld-gold hover:underline">support@infiworld.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationStatus;
