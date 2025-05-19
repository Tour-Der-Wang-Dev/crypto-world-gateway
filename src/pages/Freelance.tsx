
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Code, PenTool, Search, BarChart3, Globe, MessageSquare } from "lucide-react";

const sampleFreelancers = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Blockchain Developer",
    rate: 0.015,
    currency: "BTC",
    rating: 4.9,
    projects: 42,
    category: "Development",
    skills: ["Solidity", "Smart Contracts", "DeFi", "Web3.js"],
    avatar: "A"
  },
  {
    id: 2,
    name: "Sarah Williams",
    title: "UI/UX Designer",
    rate: 0.25,
    currency: "ETH",
    rating: 4.8,
    projects: 38,
    category: "Design",
    skills: ["UI Design", "UX Research", "Figma", "NFT Design"],
    avatar: "S"
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Smart Contract Auditor",
    rate: 0.02,
    currency: "BTC",
    rating: 5.0,
    projects: 27,
    category: "Security",
    skills: ["Smart Contract Audit", "Security Analysis", "Solidity", "Rust"],
    avatar: "M"
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "Crypto Content Writer",
    rate: 0.1,
    currency: "ETH",
    rating: 4.7,
    projects: 53,
    category: "Marketing",
    skills: ["Technical Writing", "Blog Posts", "White Papers", "Research"],
    avatar: "P"
  },
];

const sampleJobs = [
  {
    id: 1,
    title: "Develop NFT Marketplace",
    budget: 2.5,
    currency: "ETH",
    category: "Development",
    skills: ["React", "Solidity", "NFT", "Web3"],
    duration: "3 months",
    client: "CryptoStartup",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Design DeFi Platform UI",
    budget: 0.8,
    currency: "ETH",
    category: "Design",
    skills: ["UI/UX", "Figma", "DeFi", "Web Design"],
    duration: "1 month",
    client: "DeFiProject",
    posted: "5 days ago"
  },
  {
    id: 3,
    title: "Smart Contract Security Audit",
    budget: 0.05,
    currency: "BTC",
    category: "Security",
    skills: ["Solidity", "Security", "Audit", "Smart Contracts"],
    duration: "2 weeks",
    client: "SecureProtocol",
    posted: "1 day ago"
  },
];

const Freelance = () => {
  return (
    <div className="bg-space min-h-screen">
      <StarBackground />
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Freelance Services
          </h1>
          <p className="text-gray-300">
            Find talented freelancers or offer your services with secure cryptocurrency payments.
          </p>
        </div>
        
        {/* Tabs for Freelancers and Jobs */}
        <Tabs defaultValue="freelancers" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-infiworld-blue-dark/70 backdrop-blur-sm border border-infiworld-gold/20 rounded-lg">
            <TabsTrigger value="freelancers" className="data-[state=active]:bg-infiworld-gold data-[state=active]:text-infiworld-space-dark">
              <Briefcase className="w-4 h-4 mr-2" /> Freelancers
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-infiworld-gold data-[state=active]:text-infiworld-space-dark">
              <Search className="w-4 h-4 mr-2" /> Find Jobs
            </TabsTrigger>
          </TabsList>
          
          {/* Freelancers Tab */}
          <TabsContent value="freelancers" className="mt-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" className="border-infiworld-gold/30 bg-infiworld-blue-dark/50 text-infiworld-gold hover:bg-infiworld-gold/10">
                <Code size={16} className="mr-2" /> Development
              </Button>
              <Button variant="outline" className="border-infiworld-gold/30 bg-infiworld-blue-dark/50 text-infiworld-gold hover:bg-infiworld-gold/10">
                <PenTool size={16} className="mr-2" /> Design
              </Button>
              <Button variant="outline" className="border-infiworld-gold/30 bg-infiworld-blue-dark/50 text-infiworld-gold hover:bg-infiworld-gold/10">
                <BarChart3 size={16} className="mr-2" /> Marketing
              </Button>
              <Button variant="outline" className="border-infiworld-gold/30 bg-infiworld-blue-dark/50 text-infiworld-gold hover:bg-infiworld-gold/10">
                <Globe size={16} className="mr-2" /> All Categories
              </Button>
            </div>
            
            {/* Freelancers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sampleFreelancers.map((freelancer) => (
                <Card key={freelancer.id} className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20 transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-infiworld-blue text-infiworld-gold">{freelancer.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-white">{freelancer.name}</CardTitle>
                          <p className="text-sm text-gray-400">{freelancer.title}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-infiworld-gold">★</span>
                          <span className="text-white ml-1">{freelancer.rating}</span>
                        </div>
                        <p className="text-xs text-gray-400">{freelancer.projects} projects</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-300">Skills:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {freelancer.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 text-xs rounded-full bg-infiworld-blue-dark border border-infiworld-gold/30 text-infiworld-gold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="font-medium text-white">
                      {freelancer.rate} {freelancer.currency} <span className="text-gray-400 text-sm">/hour</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="border-infiworld-gold/30 text-infiworld-gold hover:bg-infiworld-gold/10">
                      <MessageSquare size={18} className="mr-2" /> Contact
                    </Button>
                    <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
                      View Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Jobs Tab */}
          <TabsContent value="jobs" className="mt-4">
            <div className="space-y-6">
              {sampleJobs.map((job) => (
                <Card key={job.id} className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20 transition-all duration-300 hover:shadow-gold">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-white">{job.title}</CardTitle>
                        <p className="text-sm text-gray-400">{job.client} • Posted {job.posted}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-infiworld-gold">{job.budget} {job.currency}</div>
                        <p className="text-xs text-gray-400">{job.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-300">Required Skills:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {job.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 text-xs rounded-full bg-infiworld-blue-dark border border-infiworld-gold/30 text-infiworld-gold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p className="mb-1"><span className="text-gray-400">Category:</span> {job.category}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light w-full">
                      Apply for Job
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Freelance;
