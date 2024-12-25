import { useEffect, useState } from "react";
import { PricingPlan } from "@/types/pricing";
import { PricingCard } from "../pracingCard/pricing-card";
import { Skeleton } from "../skeleton/Skeleton";

export default function PricingSection() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/plans`, {
          method: "GET",
          redirect: "follow",
        });
        if (!response.ok) {
          throw new Error("Error al obtener los planes");
        }
        const data = await response.json();
        setPlans(data); // Ajuste aquí: usa `data` directamente, no `data.plans`
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    ); // Componente de carga
  }

  if (error) {
    return (
      <section id="precios" className="flex justify-center bg-[#cbd1d7] py-12 md:py-24 lg:py-20">

        <div className="flex flex-wrap justify-center gap-8">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="precios" className="flex justify-center bg-[#cbd1d7] py-12 md:py-24 lg:py-20">

      <div className="mx-auto px-4 container">
        <h2 className="mb-12 font-bold text-3xl text-center sm:text-5xl tracking-tighter">Nuestos Planes</h2>
        <div className="content-center gap-3 lg:gap-12 xs:gap-6 grid md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan: PricingPlan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        <p className="pt-6 font-semibold text-2xs text-center md:text-2xl">Contactenos, y un asesor comercial, lo guiará para escoger el mejor plan.</p>

      </div>
    </section>
  );
}
