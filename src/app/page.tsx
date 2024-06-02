"use client";

import { useState } from "react";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  age: z.coerce
    .number()
    .int()
    .positive({ message: "Age must be a positive number." }),
});

export default function Home() {
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(
    null
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (
    data: z.infer<typeof formSchema>
  ) => {
    console.log(data);
    setFormData(data);
  };

  return (
    <div className="container m-auto">
      <Card className="w-96 mx-auto mt-10">
        <CardHeader>
          <CardTitle>ReactHookForm (shadcn)</CardTitle>
          <CardDescription>using shadcn components and zod</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>age</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="age"
                        type="number"
                        min="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-3">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            {formData
              ? `name: ${formData.name}, age: ${formData.age}`
              : "No form data submitted yet."}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
