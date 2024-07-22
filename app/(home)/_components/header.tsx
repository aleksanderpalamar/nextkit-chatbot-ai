import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="bg-violet-200 text-zinc-800 
    py-4 px-6 flex items-center justify-between 
    border-b border-violet-300">
      <div className="flex items-center gap-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>
            <div className="w-28 h-28 rounded-full bg-violet-500 flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/robot_yellowJump.png"
                alt="robot"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          </AvatarFallback>
        </Avatar>
        <h1 className="text-base font-bold">
          Assistant generative text you can use that uses Ollama AI with any model from the Ollama AI provider.
        </h1>
      </div>
    </header>
  )
}