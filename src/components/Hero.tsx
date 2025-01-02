import Typewriter from "typewriter-effect";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./ParticleBackground/ParticleBackground";
import webConfig from "../webConfig";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <Typewriter
            options={{
              strings: [
                "Your Ultimate Discord Assistant",
                "Packed With Powerful Commands",
                "Manage Your Community Easily",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
          The all-in-one Discord bot that brings powerful moderation, auto-mod
          features, and seamless utility to your server.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={webConfig.botInvite}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Add To Discord
          </a>
          <a
            href={webConfig.discordServer}
            className="border border-white/20 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors"
          >
            Support Server
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
