import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const SingleCard = ({ card }) => {
  const { estate_title, image, segment_name, price, status, area, location } = card;
  return (
    <div>
      
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-6 text-left">
          <Typography
            variant="h3"
            color="white"
            className="mb-3 font-medium text-left"
          >
            {estate_title}
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            {segment_name}
          </Typography>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleCard;
