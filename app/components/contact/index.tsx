"use client";

import { Github, Linkedin, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Clock from "./Clock";
import { SiBento } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(1),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);
  }

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <span className="px-5" style={textStyle}>
              CONTACT
            </span>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-20 lg:space-x-32  space-x-5">
          <div className="flex-1 ">
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold pb-5">
              Have an awesome idea? <br /> Let&apos;s bring to life.
            </h1>
            <p className="pb-10">
              I am currently available for freelance & fulltime work.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex space-x-2">
                  <div className="flex-1 pb-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl className="border-b-4">
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl className="border-b-4">
                            <Input
                              type="text"
                              placeholder="Your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl className="border-b-4">
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-5">
                  <Button className="rounded-full py-6 px-7" type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="flex-1 pt-20 lg:pt-0 space-y-10 lg:space-y-20">
            <div>
              <div className="text-xl lg:text-3xl font-bold pb-4">
                Contact Details
              </div>
              <a
                className="link-underline link-underline-black"
                href="mailto:muhammad.dickynn@gmail.com"
              >
                muhammad.dickynn@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xl lg:text-3xl font-bold pb-4">
                My Digital Spaces
              </div>

              <div className="space-y-4 ">
                <div className="flex items-center ">
                  <FaGithub className="w-5" />
                  <Link
                    className="pl-2"
                    target="_blank"
                    href={"https://github.com/muhammad-dicky"}
                  >
                    <p className="link-underline link-underline-black">
                      Github
                    </p>
                  </Link>
                </div>
                <div className="flex items-center ">
                  <SiBento className="w-5" />
                  <Link
                    className="pl-2"
                    target="_blank"
                    href={"https://bento.me/dickyn"}
                  >
                    <p className="link-underline link-underline-black">Bento</p>
                  </Link>
                </div>

                <div className="flex items-center">
                  <FaLinkedin className="w-5" />
                  <Link
                    className="pl-2"
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/muhammad-dicky-7402331b6/"
                    }
                  >
                    <p className="link-underline link-underline-black">
                      LinkedIn
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-3xl font-bold pb-3">Location</div>
              <p>Bali, Indonesia</p>
              <p>
                <Clock />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
