import { TitleBlock } from "@/components/sections/title-block";
import { Method } from "@/components/sections/method";
import { Figures } from "@/components/sections/figures";
import { RevisionHistory } from "@/components/sections/revision-history";
import { ResultsTable } from "@/components/sections/results-table";
import { Appendix } from "@/components/sections/appendix";
import { Publication } from "@/components/sections/publication";
import { Correspondence } from "@/components/sections/correspondence";

export default function Home() {
  return (
    <main>
      <TitleBlock />
      <Method />
      <Figures />
      <RevisionHistory />
      <ResultsTable />
      <Appendix />
      <Publication />
      <Correspondence />
    </main>
  );
}
