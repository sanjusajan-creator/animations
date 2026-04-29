import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Flame } from "lucide-react";
import {cn} from "@/lib/utils";

/* ============================= */
/* ShineBorder (Reusable Wrapper) */
/* ============================= */

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 3,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) => {
  return (
    <div
      className={cn("relative rounded-2xl", className)}
      style={{ padding: borderWidth }}
    >
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className={cn(
            "absolute -inset-full blur-sm animate-spin bg-conic",
            gradient
          )}
          style={{ animationDuration: `${duration}s` }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative rounded-2xl bg-card">
        {children}
      </div>
    </div>
  );
};

/* ============================= */
/* Place Card with Shine Effect */
/* ============================= */

type PlaceCardProps = {
  placeName: string;
  description: string;
  entryTime: string;
  exitTime: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  mapEmbedUrl: string;
  directionUrl: string;
  shineGradient?: string;
};

const PlaceCard = ({
  placeName,
  description,
  entryTime,
  exitTime,
  imageSrc,
  imageAlt,
  features,
  mapEmbedUrl,
  directionUrl,
  shineGradient = "from-blue-500 via-red-500 to-teal-400",
}: PlaceCardProps) => {
  return (
    <ShineBorder
      borderWidth={2}
      duration={4}
      gradient={shineGradient}
      className="w-full"
    >
      <Card className="border-0 shadow-none rounded-2xl">
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-green-500 text-white">
              Entry {entryTime}
            </Badge>
            <Badge className="bg-red-500 text-white">
              Exit {exitTime}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="p-4">
          <CardTitle className="text-xl">{placeName}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <ul className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          
          <Button className="w-full" asChild>
            <a href={directionUrl} target="_blank" rel="noopener noreferrer">
              <Flame className="w-4 h-4 mr-2" />
              Navigate to {placeName}
            </a>
          </Button>
        </CardContent>
      </Card>
    </ShineBorder>
  );
};

/* ============================= */
/* Demo - Place Cards for Day 6 */
/* ============================= */

const day6Places = [
  {
    placeName: "India Gate",
    description: "Standing 42 meters tall, this sandstone arch commemorates 70,000 soldiers. The Kartavya Path offers a stunning view of Delhi's power center.",
    entryTime: "9:20 AM",
    exitTime: "10:15 AM",
    imageSrc: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    imageAlt: "India Gate",
    features: ["Monument", "Photography", "Morning Walk", "Green Space"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5579813129575!2d77.22699914862922!3d28.61303441711518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1776414801690!5m2!1sen!2sin",
    directionUrl: "https://www.google.com/maps/dir/?api=1&destination=India+Gate+Delhi",
  },
  {
    placeName: "Rashtrapati Bhavan",
    description: "The official residence of the President of India, featuring colonial architecture and Mughal gardens.",
    entryTime: "10:30 AM",
    exitTime: "11:30 AM",
    imageSrc: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    imageAlt: "Rashtrapati Bhavan",
    features: ["Heritage Building", "Gardens", "Architecture", "Museum"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.722519798537!2d77.24152471782208!3d28.60144591725856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0f3d3b8f4b%3A0x6bc3e64a923f54c8!2sRashtrapati%20Bhavan!5e0!3m2!1sen!2sin!4v1776416205732!5m2!1sen!2sin",
    directionUrl: "https://www.google.com/maps/dir/?api=1&destination=Rashtrapati+Bhavan+Delhi",
    shineGradient: "from-purple-500 via-pink-500 to-yellow-400",
  },
];

export default function Day6Places() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {day6Places.map((place, idx) => (
        <PlaceCard key={idx} {...place} />
      ))}
    </div>
  );
}

export { ShineBorder, PlaceCard };