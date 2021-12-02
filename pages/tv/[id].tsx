import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import React from "react";
import MediaDetails from "@components/MediaDetails";
import { TV } from "@constants/constants";
import getDetails from "@lib/getDetails";
import { TVDetailsResult, TVImages } from "types/tv";

interface Props {
  details: TVDetailsResult;
  images: TVImages;
}

const TVDetails: React.FC<Props> = ({ details }) => {
  return (
    <>
      <MediaDetails
        name={details.name}
        posterPath={details.poster_path}
        genres={details.genres}
        overview={details.overview}
        tagLine={details.tagline}
        backdropPath={details.backdrop_path}
      >
        <div className="grid grid-cols-2 text-center mt-4">
          <div className="text-lg sm:text-xl font-bold font-heading text-gray-200">
            Rating
          </div>
          <div className="text-lg sm:text-xl font-bold font-heading text-gray-200">
            Status
          </div>
          <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-auto border-t border-gray-500">
            {details.vote_average}/10
          </div>
          <div className="text-xl sm:text-3xl font-bold font-heading mx-5 md:mx-auto border-t border-gray-500">
            {details.status}
          </div>
        </div>
      </MediaDetails>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const details = await getDetails(TV, context.params.id);

  return { props: { details: details } };
};

export default TVDetails;
