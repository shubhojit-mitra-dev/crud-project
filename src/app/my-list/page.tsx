import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import AddTopicCard from "@/components/ui/AddTopicCard";
import TopicCard from "@/components/ui/TopicCard";

// Dummy data structure matching MongoDB document schema
const dummyTopics = [
  {
    _id: "1",
    title: "Learn Next.js",
    description: "Master Next.js 13 with app router and server components"
  },
  {
    _id: "2",
    title: "Build Portfolio",
    description: "Create a portfolio website using React and Tailwind CSS"
  },
  {
    _id: "3",
    title: "Study MongoDB",
    description: "Learn MongoDB aggregation pipeline and advanced queries"
  },
  {
    _id: "4",
    title: "Learn Next.js",
    description: "Master Next.js 13 with app router and server components"
  },
  {
    _id: "5",
    title: "Build Portfolio",
    description: "Create a portfolio website using React and Tailwind CSS"
  },
  {
    _id: "6",
    title: "Study MongoDB",
    description: "Learn MongoDB aggregation pipeline and advanced queries"
  },
  {
    _id: "7",
    title: "Learn Next.js",
    description: "Master Next.js 13 with app router and server components"
  },
  {
    _id: "8",
    title: "Build Portfolio",
    description: "Create a portfolio website using React and Tailwind CSS"
  },
  {
    _id: "9",
    title: "Study MongoDB",
    description: "Learn MongoDB aggregation pipeline and advanced queries"
  }
];

export default function MyList() {
    return (
      <>
        <NavBar isDashboard={true} />
        <div className="flex flex-col items-center pb-20"> {/* Added pb-20 for footer space */}
          <div className="w-[300px] sm:w-[400px] lg:w-[500px] px-4">
            <h1 className="my-10 text-5xl font-bold text-center">
              My List
            </h1>
            <div className="space-y-4 mb-8"> {/* Added mb-8 for extra bottom margin */}
              <AddTopicCard />
              {dummyTopics.map((topic) => (
                <TopicCard
                  key={topic._id}
                  id={topic._id}
                  title={topic.title}
                  description={topic.description}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }