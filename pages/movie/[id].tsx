import { useRouter } from "next/router";

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Movie Detail for {id}</div>
}

export default MovieDetail;