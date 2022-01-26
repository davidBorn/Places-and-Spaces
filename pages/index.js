import Prismic from "@prismicio/client";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver"; // import from project root
import { apiEndpoint } from "../prismicConfiguration";
import Layout from "../components/Layout";

const Page = ({ slices }) => (
    <Layout>
        <SliceZone resolver={resolver} slices={slices} />
    </Layout>
);

export const getStaticProps = useGetStaticProps({
    client: Prismic.client(`${apiEndpoint}`),
    type: "landing-page",
    queryType: "single",
});

export default Page;
