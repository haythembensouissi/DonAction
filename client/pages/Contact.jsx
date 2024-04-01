/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kNkkd4kBsVV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <nav className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">DonAction</h1>
        <div className="flex space-x-4">
          <Link className="text-lg" href="#">
            Home
          </Link>
          <Link className="text-lg" href="#">
            About
          </Link>
          <Link className="text-lg" href="#">
            News
          </Link>
          <Link className="text-lg" href="#">
            Donate
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Input className="rounded-md border px-2 py-1" placeholder="Search" type="search" />
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</Button>
        </div>
      </nav>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full">
            <img
              alt="News image"
              className="w-full h-auto aspect-[16/9] object-cover"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <CardContent className="flex flex-col items-start">
              <p className="text-lg font-semibold">History and culture of Palestine</p>
              <Button className="mt-2" variant="outline">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News image"
              className="w-full h-auto aspect-[16/9] object-cover"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <CardContent className="flex flex-col items-start">
              <p className="text-lg font-semibold">The significance of olive trees in Palestinian heritage</p>
              <Button className="mt-2" variant="outline">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News image"
              className="w-full h-auto aspect-[16/9] object-cover"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <CardContent className="flex flex-col items-start">
              <p className="text-lg font-semibold">Architectural landmarks in Palestinian cities</p>
              <Button className="mt-2" variant="outline">
                Read more
              </Button>
            </CardContent>
          </Card>
          <Card className="w-full">
            <img
              alt="News image"
              className="w-full h-auto aspect-[16/9] object-cover"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <CardContent className="flex flex-col items-start">
              <p className="text-lg font-semibold">Palestinian cuisine: A blend of flavors and traditions</p>
              <Button className="mt-2" variant="outline">
                Read more
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

