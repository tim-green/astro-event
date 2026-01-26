import yaml from "yaml";
import eventSource from "./event.yml?raw";

// Event Data 
export interface HeroContent {
  tagline: string;
  title: string;
  description: string;
  weekday: string;
  dateDisplay: string;
  location: string;
}

  
export interface StoryContent {
  chapterLabel: string;
  heading: string;
  body: string;
  imageAsset?: string;
  imageAlt: string;
  highlights: string[];
} 
export interface ScheduleEvent {
  number: string;
  label: string;
  title: string;
  description: string;
  details: string[];
}

export interface ScheduleContent {
  heading: string;
  title: string;
  description: string;
  events: ScheduleEvent[];
}

export interface CardContent {
  imageAlt?: string;
  title: string;
  description?: string;
  href?: string;
}

export interface GalleryImage {
  asset: string;    
  alt: string;
}

export interface GalleryContent {
  heading: string;
  title: string;
  description: string;
  images: GalleryImage[];
} 

export interface CountdownContent {
    label: string;
    heading: string;
    message: string;
    target: string;
}

export interface EventData {
  hero: HeroContent;
  story: StoryContent;
  schedule: ScheduleContent;
  cards: CardContent[];
  gallery: GalleryContent;
  countdown: CountdownContent;
}

// Parse the YAML event data
const parsedEventData = yaml.parse(eventSource) as EventContent;

// Exported function to get event data
export function getEventData(): EventContent {
  return parsedEventData;
}
