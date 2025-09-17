
"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Handshake, Plus, Users, UserPlus, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const tourSteps = [
    {
        icon: Handshake,
        title: "Welcome to TrusTNet!",
        description: "Let's take a quick tour to see how you can make and keep promises, build trust, and connect with others.",
    },
    {
        icon: Plus,
        title: "Make Your First Promise",
        description: "Click the '+' button to make a new promise. You can set a title, describe your goal, set a deadline, and even add a custom color to make it your own.",
    },
    {
        icon: Users,
        title: "Join or Create Groups",
        description: "Groups are a great way to make promises with others. You can join public groups or create your own private ones for friends, family, or colleagues.",
    },
    {
        icon: UserPlus,
        title: "Find People to Connect With",
        description: "Head over to the 'Suggestions' page to find people you may know. Building your network helps you stay accountable and get inspired.",
    },
    {
        icon: User,
        title: "Manage Your Profile",
        description: "Your profile shows your promise-keeping stats. Build a great track record to earn trust within the community.",
    }
];

interface TourProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Tour({ isOpen, onOpenChange }: TourProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        onOpenChange(false);
        // Reset to first step for next time
        setTimeout(() => setCurrentStep(0), 300);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleOpenChange = (open: boolean) => {
      onOpenChange(open);
       if (!open) {
        // Reset to first step if closed prematurely
        setTimeout(() => setCurrentStep(0), 300);
      }
  }

  const step = tourSteps[currentStep];
  const Icon = step.icon;
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
            <div className="flex justify-center mb-4">
                 <div className="h-16 w-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8" />
                </div>
            </div>
          <DialogTitle className="text-center text-2xl font-bold">{step.title}</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground min-h-[60px]">
            {step.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
             <Progress value={progress} className="w-full" />
        </div>
        <DialogFooter className="flex justify-between w-full">
            {currentStep > 0 ? (
                <Button variant="outline" onClick={goToPrevious}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
            ) : ( <div></div>) }
          
            <Button onClick={goToNext}>
                {currentStep < tourSteps.length - 1 ? "Next" : "Finish"}
                {currentStep < tourSteps.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
