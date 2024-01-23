"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Clock from "./Clock";
import { SiBento } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
import { Reveal } from "../Reveal";
import sendEmail from "@/lib/send-email";
// import { useToast } from "@/components/ui/use-toast";
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
  // const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // function onSubmit(value: z.infer<typeof formSchema>) {
  //   sendEmail(value);
  // }
  async function onSubmit(value: z.infer<typeof formSchema>) {
    try {
      sendEmail(value);
      toast.success("Email sent successfully!");

      // testing
      const response = await fetch(
        "https://api.sheetmonkey.io/form/bikPxrSWGN3JF6RKmMmVYe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      if (response.ok) {
        // Handle success (optional)
        console.log("Form submitted successfully!");
      } else {
        // Handle error
        console.error("Form submission failed:", response.status);
      }
      // batasbawah

      form.reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    }
  }

  // TESTING API SHEETMONKEY
  // const FormComponent = () => {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });

  //   const handleChange = (e:any) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e:any) => {
  //     e.preventDefault();

  //   };

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="flex text-4xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <Reveal>
              <span className="px-5" style={textStyle}>
                CONTACT
              </span>
            </Reveal>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-20 lg:space-x-32  space-x-5">
          <div className="flex-1 ">
            <Reveal>
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-extrabold pb-5">
                Have an awesome idea? <br /> Let&apos;s bring to life.
              </h1>
            </Reveal>
            <Reveal>
              <p className="pb-10">
                I am currently available for freelance & fulltime work.
              </p>
            </Reveal>

            <Form {...form}>
              <form
                action="https://api.sheetmonkey.io/form/bikPxrSWGN3JF6RKmMmVYe"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
                              type="email"
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
              <Reveal>
                <div className="text-xl lg:text-3xl font-bold pb-4">
                  Contact Details
                </div>
              </Reveal>
              <a
                className="link-underline link-underline-black"
                href="mailto:muhammad.dickynn@gmail.com"
              >
                muhammad.dickynn@gmail.com
              </a>
            </div>

            <div>
              <Reveal>
                <div className="text-xl lg:text-3xl font-bold pb-4">
                  My Digital Spaces
                </div>
              </Reveal>

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
              <Reveal>
                <div className="text-xl lg:text-3xl font-bold pb-3">
                  Location
                </div>
              </Reveal>
              <Reveal>
                <p>Bali, Indonesia</p>
              </Reveal>

              <Clock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
