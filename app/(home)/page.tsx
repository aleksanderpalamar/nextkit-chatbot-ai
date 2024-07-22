

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormComponent } from "./_components/form-component";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-zinc-800 text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                Gpt
              </div>
            </AvatarFallback>
          </Avatar>
          <h1 className="text-xl font-bold">
            Assistant generative text with Gemma2
          </h1>
        </div>
      </header>
      <FormComponent />      
    </div>
  );
}
