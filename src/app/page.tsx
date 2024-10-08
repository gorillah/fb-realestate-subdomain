"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Award,
  Users,
  Building,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute left-0 right-0 top-0 z-50 py-6 shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Lorem Ipsum Logo"
              width={120}
              height={40}
            />
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link
              href="#"
              className="font-bold text-white transition-all duration-500 ease-in-out hover:text-gray-200 hover:underline"
            >
              Lorem
            </Link>
            <Link
              href="#"
              className="font-bold text-white transition-all duration-500 ease-in-out hover:text-gray-200 hover:underline"
            >
              Ipsum
            </Link>
            <Link
              href="#"
              className="font-bold text-white transition-all duration-500 ease-in-out hover:text-gray-200 hover:underline"
            >
              Dolor
            </Link>
            <Link
              href="#"
              className="font-bold text-white transition-all duration-500 ease-in-out hover:text-gray-200 hover:underline"
            >
              Sit
            </Link>
          </nav>

          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </motion.header>

      {/* New Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-opacity-80 bg-gradient-to-r from-primary to-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Lorem Ipsum Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="container z-10 mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              className="space-y-8"
            >
              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                Lorem ipsum <span className="text-[#cea442]">dolor sit</span>{" "}
                amet
              </h1>
              <p className="text-xl text-white md:text-2xl">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col gap-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg">Lorem ipsum</Button>
                <Button size="lg" variant="outline">
                  Dolor sit amet
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative hidden h-[500px] md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/hero-building.jpg"
                alt="Lorem Ipsum"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 rounded-lg bg-white p-6 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Lorem Ipsum
                </h3>
                <p className="text-gray-600">Dolor sit amet</p>
                <Button
                  variant="link"
                  className="mt-2 h-auto p-0 font-semibold text-primary"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum
          </motion.h2>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideIn}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                Consectetur, Adipiscing, Elit
              </h3>
              <p className="mb-6 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-8 text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              {/* <Button variant="outline" size="lg" className="text-lg">
                Lorem ipsum <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </motion.div>
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/buildings/1.jpg"
                alt="Lorem Ipsum"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Properties Section */}
      <section id="projects" className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum Dolor
          </motion.h2>
          <motion.p
            className="mx-auto mb-16 max-w-3xl text-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </motion.p>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lorem Ipsum – Dolor Sit",
                location: "Amet, Consectetur",
                description:
                  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                image: "/buildings/1.jpg",
              },
              {
                title: "Dolor Sit – Amet Consectetur",
                location: "Adipiscing, Elit",
                description:
                  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                image: "/buildings/2.jpg",
              },
              {
                title: "Consectetur Adipiscing",
                location: "Elit, Sed Do",
                description:
                  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
                image: "/buildings/3.jpg",
              },
            ].map((property, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="flex h-full flex-col overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-2xl">{property.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{property.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-lg">Lorem Ipsum</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="mb-8 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum Dolor Sit
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Lorem Ipsum
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cur Eligere Lorem Ipsum
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Star,
                title: "Lorem",
                description:
                  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
              },
              {
                icon: Award,
                title: "Ipsum",
                description:
                  "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
              },
              {
                icon: Users,
                title: "Dolor",
                description:
                  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
              },
              {
                icon: Building,
                title: "Sit",
                description:
                  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="flex h-full flex-col text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 rounded-full bg-primary p-4 text-primary-foreground">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="mb-4 text-2xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-16 text-center text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Quid Nostri Clienti Dicunt
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Lorem Ipsum",
                role: "Dolor Sit",
                testimonial:
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
              },
              {
                name: "Consectetur Adipiscing",
                role: "Elit Sed",
                testimonial:
                  "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
              },
              {
                name: "Nemo Enim",
                role: "Ipsam Voluptatem",
                testimonial:
                  "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="italic text-gray-600">
                      &rdquo;{testimonial.testimonial}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-8 text-center text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contactus Lorem Ipsum
          </motion.h2>
          <motion.p
            className="mx-auto mb-16 max-w-3xl text-center text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </motion.p>
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Lorem*"
                required
                className="p-6 text-lg"
              />
              <Input
                type="tel"
                placeholder="Ipsum*"
                required
                className="p-6 text-lg"
              />
              <Input
                type="email"
                placeholder="Dolor*"
                required
                className="p-6 text-lg"
              />
              <Textarea
                placeholder="Sit amet consectetur adipiscing elit"
                rows={4}
                className="p-6 text-lg"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="privacy" className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
              </div>
              <Button type="submit" size="lg" className="w-full py-6 text-lg">
                Lorem ipsum
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Image
                src="/logo.svg"
                alt="Lorem Ipsum Logo"
                width={100}
                height={50}
              />
              <p className="mt-4 text-gray-400">
                Lorem ipsum © 2024 dolor sit amet
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Lorem Ipsum</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Dolor
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Sit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Amet
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Consectetur
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Adipiscing Elit</h3>
              <p className="mb-2 text-gray-400">lorem@ipsum.com</p>
              <p className="mb-4 text-gray-400">Sed do eiusmod tempor</p>
              <p className="text-2xl font-bold">1234567890</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Incididunt Ut</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Facebook />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Twitter />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Instagram />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-400">
            <Link href="#" className="mr-4 transition-colors hover:text-white">
              Labore et Dolore
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Magna Aliqua
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
