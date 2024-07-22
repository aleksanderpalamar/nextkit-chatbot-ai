"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { SendIcon } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const FormComponent = () => {
  const { input, handleInputChange, handleSubmit, messages } = useChat();;
  const [textarea, setTextarea] = useState<string>("");

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
  return (
    <>
      <div className="flex-1 overflow-auto p-6 space-y-4">
        {messages.map((message, index) => (
          message.role === "user" ? (
            <div key={index} className="bg-zinc-800 text-primary-foreground rounded-lg p-4 max-w-[80%]">
              {message.content}
            </div>
          ) : (
            <div key={index} className="bg-muted text-foreground rounded-lg p-4 max-w-[80%] float-right prose">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>GPT</AvatarFallback>
              </Avatar>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          )
        ))}
      </div>
      <div className="bg-background border-t border-border p-4 flex items-center">
        <Textarea
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="flex-1 rounded-md border border-input bg-transparent px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button
          variant="default"
          size="icon"
          onClick={handleSubmit}
          type="submit"
          className="ml-4"
        >
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Enviar</span>
        </Button>
      </div>
    </>
  )
}