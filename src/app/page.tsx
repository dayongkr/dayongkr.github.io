import { ExternalLink } from "@/components/ExternalLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <article className="prose">
        <h1 className="!text-xl">
          세상에 도움이 되는 것들을 만드는 것을 좋아하는 소프트웨어 엔지니어
          이다용입니다.
        </h1>
        <p>
          다양하고 많은 사람이 모이는 웹 생태계를 좋아하고, 특히 사용자와 밀접한
          프론트엔드 개발을 좋아합니다.
        </p>
        <p>
          문제를 가능한 단순한 방법으로 해결하고자 노력하고, 반복되는 작업을
          자동화하여 생산성을 높이는 것을 좋아합니다.
        </p>
        <p>
          말하는 것보다 듣는 것을 좋아하고, 상대방이 가지고 있는 좋은 부분을
          배우고자 노력합니다.
        </p>
        <p>
          새로운 은행 경험을 제공하고 있는{" "}
          <ExternalLink href="https://www.tossbank.com/">토스뱅크</ExternalLink>
          에서 프론트엔드 개발자로 2025년 1월에 입사할 예정입니다.
        </p>
      </article>
      <h2 className="text-2xl">최근 글</h2>
      <Link href="/posts/1">
        <article>
          <h3 className="text-2xl font-bold">글 제목</h3>
          <p className="text-lg mb-2">글 요약</p>
          <p className="text-sm">24.11.06</p>
        </article>
      </Link>
    </div>
  );
}
