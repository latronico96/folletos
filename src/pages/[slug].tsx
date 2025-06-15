import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getAllEmprendimientos, getEmprendimientoBySlug, Emprendimiento } from "@/lib/emprendimientos";
import Folleto from "@/app/Folleto";

type Props = {
  emprendimiento: Emprendimiento;
};

export default function EmprendimientoPage({ emprendimiento }: Props) {
  return (
    <>
      <Head>
        <title>{emprendimiento.nombre}</title>
        <meta name="description" content={emprendimiento.descripcion} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ignacio Latronico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content={emprendimiento.nombre} />
        <meta property="og:description" content={emprendimiento.descripcion} />
        <meta property="og:image" content={emprendimiento.imagenPreviewUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`/${emprendimiento.slug}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={emprendimiento.nombre} />
        <meta name="twitter:description" content={emprendimiento.descripcion} />
        <meta name="twitter:image" content={emprendimiento.imagenPreviewUrl} />


      </Head>
      <Folleto emprendimiento={emprendimiento} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const emprendimientos = getAllEmprendimientos();
  const paths = emprendimientos.map((e) => ({
    params: { slug: e.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const emprendimiento = getEmprendimientoBySlug(params?.slug as string);
  if (!emprendimiento) return { notFound: true };

  return {
    props: {
      emprendimiento,
    },
  };
};
