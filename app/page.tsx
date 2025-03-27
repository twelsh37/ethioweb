import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl font-serif font-bold text-gray-900">
            እንኳን ወደ ድረ-ገጻችን በደህና መጡ
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ይህ ድረ-ገጽ በአማርኛ ቋንቋ የተፈጠረ እና የተለያዩ መረጃዎችን የያዘ ነው።
          </p>
          <Button size="lg" className="mt-4">
            ይበዛ ይዩ
          </Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            ዋና ይዘቶች
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                መረጃ እና ዜናዎች
              </h3>
              <p className="text-gray-600">
                የተለያዩ መረጃዎች እና ዜናዎች በአማርኛ ቋንቋ ይገኛሉ።
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                አገልግሎቶች
              </h3>
              <p className="text-gray-600">የተለያዩ አገልግሎቶች እና መረጃዎች በቀላሉ ይገኛሉ።</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                እድገት እና ዕድሎች
              </h3>
              <p className="text-gray-600">
                የተለያዩ እድገቶች እና ዕድሎች በአማርኛ ቋንቋ ይገኛሉ።
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            ስለ እኛ
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              እኛ በአማርኛ ቋንቋ የተለያዩ መረጃዎችን እና አገልግሎቶችን የምንያዘው ድረ-ገጽ ነን። የእኛ ዋና ዓላማ
              ተጠቃሚዎች በቀላሉ እና በፍጥነት የሚፈልጉትን መረጃ እንዲያገኙ መድረግ ነው።
            </p>
            <Button variant="outline" size="lg">
              ያግኙን
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
