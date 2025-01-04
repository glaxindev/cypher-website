import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import {
  Shield,
  MessageSquare,
  Users,
  Volume2,
  Settings,
  Gamepad2,
  Gift,
  UserRoundPlus,
  Music,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description:
      "Powerful tools to keep your server safe and clean with automated moderation features.",
  },
  {
    icon: MessageSquare,
    title: "Auto Responses",
    description:
      "Create custom automated responses and welcome messages for your community.",
  },
  {
    icon: Users,
    title: "Role Management",
    description:
      "Easily manage roles with reaction roles and automated role assignment.",
  },
  {
    icon: Volume2,
    title: "Join To Create",
    description:
      "Create and manage voice channels seamlessly tailored to your server's activity.",
  },
  {
    icon: Settings,
    title: "Utility Commands",
    description:
      "Access and utilize essential tools to simplify and enhance server management.",
  },
  {
    icon: Gamepad2,
    title: "Games & Fun",
    description:
      "Play and enjoy a variety of games directly within your Discord server.",
  },
  {
    icon: Gift,
    title: "Giveaways",
    description:
      "Host and manage giveaways with ease to engage and reward your community.",
  },
  {
    icon: UserRoundPlus,
    title: "Welcomer",
    description:
      "Welcome new members with custom messages and roles to make them feel at home.",
  },
  {
    icon: Music,
    title: "Music",
    description:
      "Listen to music with friends using the built-in music bot and streaming features.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to create an engaging and well-managed Discord
            community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
