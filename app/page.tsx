import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-[#006600]/10 to-white px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#006600] leading-tight">
              እንኳን ወደ ድረ-ገጻችን በደህና መጡ
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">
              ይህ ድረ-ገጽ በአማርኛ ቋንቋ የተፈጠረ እና የተለያዩ መረጃዎችን የያዘ ነው።
            </p>
            <Button
              size="lg"
              variant="ethRed"
              className="w-full sm:w-auto mt-4"
            >
              ይበዛ ይዩ
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section
          id="content"
          className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-8 sm:mb-12 text-[#006600]">
              ዋና ይዘቶች
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="p-4 sm:p-6 bg-[#006600]/5 rounded-lg border border-[#FDDA0D]/30 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-[#AA0000]">
                  መረጃ እና ዜናዎች
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  የተለያዩ መረጃዎች እና ዜናዎች በአማርኛ ቋንቋ ይገኛሉ።
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-[#006600]/5 rounded-lg border border-[#FDDA0D]/30 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-[#AA0000]">
                  አገልግሎቶች
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  የተለያዩ አገልግሎቶች እና መረጃዎች በቀላሉ ይገኛሉ።
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-[#006600]/5 rounded-lg border border-[#FDDA0D]/30 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-[#AA0000]">
                  እድገት እና ዕድሎች
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  የተለያዩ እድገቶች እና ዕድሎች በአማርኛ ቋንቋ ይገኛሉ።
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-12 sm:py-16 md:py-20 bg-[#FDDA0D]/10 px-4 sm:px-6 lg:px-8 border-t border-[#FDDA0D]/30"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 sm:mb-8 md:mb-12 text-[#006600]">
              ስለ እኛ
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
              እኛ በአማርኛ ቋንቋ የተለያዩ መረጃዎችን እና አገልግሎቶችን የምንያዘው ድረ-ገጽ ነን። የእኛ ዋና ዓላማ
              ተጠቃሚዎች በቀላሉ እና በፍጥነት የሚፈልጉትን መረጃ እንዲያገኙ መድረግ ነው።
            </p>
            <Button
              variant="ethOutlineRed"
              size="lg"
              className="w-full sm:w-auto"
            >
              ያግኙን
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
