import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import AddTopicCard from "@/components/ui/AddTopicCard";

export default function MyList() {
  return (
    <>
        <NavBar isDashboard={true} />
      <div className="min-h-screen flex flex-col items-center">
        <div className="w-[300px] sm:w-[400px] lg:w-[500px] px-4">
          <h1 className="my-10 text-4xl font-bold text-center">
            My List
          </h1>
            <AddTopicCard />
        </div>
      </div>
      <Footer />
    </>
  );
}