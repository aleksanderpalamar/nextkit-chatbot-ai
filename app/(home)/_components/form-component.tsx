"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { SendIcon, User2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from "next/image";
import { Label } from "@/components/ui/label";

export const FormComponent = () => {
  const { input, handleInputChange, handleSubmit, messages } = useChat();
  const [textarea, setTextarea] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    setTextarea(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="flex-1 overflow-auto p-6 space-y-4 overflow-y-auto bg-violet-50">
        {messages.map((message, index) => (
          <div key={index} className="message-spacing clear-both">
            {message.role === "user" ? (
              <div className="bg-violet-200 text-zinc-800 rounded-lg p-4 max-w-[80%] float-left mt-4 mb-4">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                        <User2 className="w-6 h-6 text-white" />
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-zinc-800">{message.role.toUpperCase()}</p>
                </div>
                {message.content}
              </div>
            ) : (
              <div className="bg-muted text-foreground rounded-lg p-4 max-w-[80%] float-right prose bg-violet-100">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                        <Image
                          src="/assets/robot_yellowJump.png"
                          alt="robot"
                          width={24}
                          height={24}
                        />
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-zinc-800">{message.role.toUpperCase()}</p>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {message.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        <div className="clear-both" />
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-violet-200 p-4 flex items-center border-t border-violet-300">
        <Label className="w-full flex items-center gap-2 bg-violet-400 rounded-md p-2 
        focus-within:ring-2 focus-within:ring-violet-400 focus-within:ring-offset-2 focus-within:ring-offset-violet-50">
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here 'Press enter to send'"
            className="flex-1 rounded-md border-none border-input bg-transparent 
            resize-none focus:ring-0 outline-none placeholder:text-zinc-300 text-zinc-100"
          />
          <Button
            variant="default"
            size="icon"
            onClick={handleSubmit}
            type="submit"
            className="ml-4 rounded-md bg-violet-500 text-white 
          hover:bg-violet-500/80 flex items-center justify-center 
          disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Enviar</span>
          </Button>
        </Label>
      </div>
    </>
  );
};
