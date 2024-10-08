import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';
import codedang1 from '@public/codedang1.webp';
import codedang2 from '@public/codedang2.webp';
import codedang3 from '@public/codedang3.webp';
import dependents1 from '@public/dependents1.webp';

export function ProjectSection() {
  return (
    <MainSection title="프로젝트">
      <SubSection
        title={{
          title: '패키지 사용 정보 사이트',
          link: { text: 'Dependents Tracker', href: 'https://dependents-tracker.vercel.app' },
          sub: {
            date: { from: { year: 24, month: 8 }, to: 'current' },
            link: { title: '깃허브 리포지토리', href: 'https://github.com/dayongkr/dependents-tracker' },
          },
        }}
        description="Dependents Tracker는 특정 패키지가 어떻게 사용되고 있는지에 대한 사용 정보를 수집하고 시각화하는 웹 서비스입니다.
        오픈 소스 기여 과정에서 사용자가 패키지를 어떻게 활용하는지 궁금했고, 이를 통해 개발 우선순위를 정하는 데 도움이 될 것으로 생각해 개발하게 되었습니다."
        activity={[
          {
            children:
              '독립적인 이벤트 루프를 가진 Worker Threads를 사용해 데이터 수집 과정을 병렬로 처리하도록 개선하여, 데이터 수집 시간을 약 5분에서 3분으로 단축했습니다.',
          },
          {
            children:
              '처음에는 최근 커밋만 클론한 후, 이전에 수집한 커밋 해시와 최신 커밋 해시를 비교해 동일할 경우 이후 과정을 건너뛰도록 캐싱 기능을 구현하여 데이터 수집 시간을 약 1분으로 단축했습니다.',
          },
          {
            children:
              '깃허브 Dependents 페이지에서 사용자 정보를 스크래핑하고, 리포지토리의 파일을 분석할 때도 정규 표현식만을 사용해 필요한 정보를 외부 의존성 없이 효율적으로 추출하는 CLI 패키지를 개발 및 배포했습니다.',
            link: {
              title: '해당 패키지',
              href: 'https://www.npmjs.com/package/@dependents-tracker/extractor?activeTab=readme',
            },
          },
          {
            children:
              '해당 프로젝트를 포크한 후 설정 파일만 수정하면 원하는 패키지의 사용 정보를 수집할 수 있도록, 데이터 수집 자동화를 깃허브 액션으로 구현하고 데이터를 파일 시스템으로 관리하는 방식으로 구현했습니다.',
            link: {
              title: '해당 워크플로우',
              href: 'https://github.com/dayongkr/dependents-tracker/blob/8b409ca25ba291264852b246795caf7179f134c1/.github/workflows/data-extractor.yml',
            },
          },
        ]}
        learned="개념으로만 알고 있던 Worker Threads와 비동기 제너레이터를 실제로 활용해 볼 수 있었습니다.
        또한, 패키지 번들링, 트랜스파일링, 배포를 직접 경험하며 자바스크립트 생태계에 대한 이해를 높일 수 있었습니다."
        skills={[
          { children: '코어: Next.js, Node.js, TypeScript' },
          { children: '스타일링: TailwindCSS, Shadcn/ui' },
          { children: '번들링/트랜스파일링: Rollup, Terser' },
          { children: 'CI/CD: Github Actions' },
          { children: '테스트: Vitest' },
          { children: '패키지 매니저: PNPM' },
        ]}
        figures={[{ src: dependents1, alt: '사이트 화면' }]}
      />
      <SubSection
        title={{
          title: '오픈 소스 기여',
          link: { text: 'es-toolkit', href: 'https://github.com/toss/es-toolkit' },
          sub: {
            date: { from: { year: 24, month: 7 }, to: 'current' },
            link: { title: '기여 이력', href: 'https://github.com/toss/es-toolkit/commits?author=dayongkr' },
          },
        }}
        description="es-toolkit은 Lodash의 느린 성능과 무거운 번들 크기를 개선한 자바스크립트 유틸리티 라이브러리입니다. 저는 많은
        사용자에게 도움을 줄 수 있는 프로젝트에 참여하고 싶었고, 기술적으로 타입스크립트를 더욱 활용할 기회라고
        생각해 기여를 시작했습니다. 꾸준히 다양한 부분에 기여했으며, 특히 생산성을 위한 자동화와 유틸리티 함수 구현에
        집중했습니다."
        activity={[
          {
            children:
              'for…of 반복문을 배열 대상으로 사용하는 것을 금지하는 ESLint 플러그인 패키지를 개발 및 적용하여 함수의 성능과 코드 일관성을 높였습니다.',
            link: {
              title: '해당 PR',
              href: 'https://github.com/toss/es-toolkit/pull/587',
            },
          },
          {
            children:
              'Lodash의 테스트 코드를 프로젝트 환경에 맞게 변환하는 스크립트를 작성하는 등 반복적인 작업을 자동화하여 개발 생산성을 높였습니다.',
            link: {
              title: '해당 PRs',
              href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+%22script%22+OR+%22automate%22&type=pullrequests&s=created&o=desc',
            },
          },
          {
            children: 'CI 과정에서 변경된 파일만 린트 작업을 수행하도록 설정하여, CI 실행 시간 및 비용을 절감했습니다.',
            link: {
              title: '해당 PRs',
              href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+ci&type=pullrequests&s=created&o=desc',
            },
          },
          {
            children: '최신 문법과 빌트인 함수를 활용해 성능을 개선하면서도 Lodash와 호환되는 함수를 구현했습니다.',
            link: {
              title: '해당 PRs',
              href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+test+OR+compat+OR+compatibility+NOT+script&type=pullrequests&s=created&o=desc',
            },
          },
          {
            children:
              '한 번 배포하면 함수 인터페이스를 변경하기 어려운 상황에서, 새로운 함수의 인터페이스를 설계하는 경험을 했습니다.',
            link: {
              title: '해당 PRs',
              href: 'https://github.com/search?q=repo:toss/es-toolkit+type:pr++author:dayongkr+is:merged+in:title+++%22sortBy%22+NOT+%22compat%22&type=pullrequests&s=created&o=desc',
            },
          },
        ]}
        learned="Lodash 코드를 분석하며 자주 사용되지 않는 케이스까지 지원하는 것이 성능 저하와 코드 복잡성 증가로 이어질 수
          있음을 배웠습니다. 이를 통해 오버 엔지니어링을 피하고, 사용자 중심의 기능을 제공하는 것이 중요하다는 것을
          깨달았습니다. 또한, 명세서를 통해 빌트인 함수의 동작을 파악하고, 타입스크립트와 코드 커버리지를 활용해
          안정성을 높이는 경험을 얻었습니다."
        skills={[
          { children: '코어: TypeScript' },
          { children: '코드 변환: Jscodeshift' },
          { children: 'CI/CD: Github Actions, CircleCI' },
          { children: '테스트: Vitest' },
          { children: '패키지 매니저: Yarn Berry' },
        ]}
      />

      <SubSection
        title={{
          title: '성균관대학교 코딩플랫폼',
          link: { text: '코드당', href: 'https://codedang.com' },
          sub: {
            date: { from: { year: 23, month: 3 }, to: { year: 24, month: 8 } },
            link: { title: '깃허브 리포지토리', href: 'https://github.com/skkuding/codedang' },
          },
        }}
        description="코드당은 별도의 개발 환경 설치 없이 수업 시간에 프로그래밍 문제를 풀고, 알고리즘 경진 대회를 개최할 수 있도록
          지원하는 교내 코딩 플랫폼 서비스입니다. 이 서비스는 학부생들로 구성된 프론트엔드, 백엔드, 인프라, 기획 및
          디자인 팀이 함께 개발 및 운영하고 있습니다."
        activity={[
          {
            children:
              '백엔드 서버에서 발급한 JWT를 SSR 서버와 사용자가 공유할 수 있도록 사용자 인증 부분을 구현했으며, 테스트 코드를 작성하여 안정성을 높였습니다.',
            link: {
              title: '해당 PRs',
              href: 'https://github.com/search?q=repo:skkuding/codedang+author:dayongkr+type:pr++state:closed+in:title+authentication&type=pullrequests&s=created&o=desc',
            },
          },
          {
            children:
              '사용자 세션을 클라이언트와 서버 구분 없이 가져올 수 있도록 함수를 추상화하여 개발자 경험을 향상하고, 클라이언트 측에서는 클로저를 활용해 캐싱을 구현하여 서버 부하를 줄였습니다.',
            link: {
              title: '해당 PR',
              href: 'https://github.com/skkuding/codedang/pull/1973',
            },
          },
          {
            children:
              '이미지 사용을 최소화한 캐러셀 컴포넌트를 개발하고, Next.js의 이미지 최적화 관련 소스 코드를 분석하여 그 내용을 공유하는 등 로딩 속도 개선에 기여했습니다.',
            link: {
              title: '정리한 글',
              href: 'https://velog.io/@dayongkr/Next.JS%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-%EB%B6%80%EC%A0%9C.-AVIF-%EB%A7%8C%EB%8A%A5%EC%9D%80-%EC%95%84%EB%8B%88%EB%8B%A4',
            },
          },
          {
            children:
              '특정 페이지의 First Load JS 용량이 유난히 큰 것을 파악하고, Webpack Analyzer로 분석한 후 트리 쉐이킹이 되지 않는 부분을 수정하여 용량을 1.1MB에서 0.67MB로 줄였습니다.',
            link: {
              title: '해당 PR',
              href: 'https://github.com/skkuding/codedang/pull/1525',
            },
          },
          {
            children:
              '통일성이 떨어진 프로젝트 구조를 개선하기 위해 토론을 주도하여, 동아리 상황에 맞는 프로젝트 구조에 대한 의견을 수렴하였습니다.',
            link: {
              title: '개선안 문서',
              href: 'https://dayonglee.notion.site/1-aa05976d60e84cdc87b423337d0b2a0c?pvs=4',
            },
          },
        ]}
        learned="28명의 동아리 부원과 함께 사용자가 있는 하나의 프로젝트를 1년 반 동안 개발하면서, 배경지식이 다른 팀들과
          소통하는 역량을 키울 수 있었습니다. 다만, 마감 일정에 쫓겨 코드 리뷰를 제대로 하지 않은 점이 아쉬웠으며, 코드
          리뷰를 통해 팀원 간 의견을 공유하는 것이 중요하다는 것을 몸소 깨달았습니다."
        skills={[
          { children: '코어: Next.js, TypeScript' },
          { children: '상태 관리: Zustand' },
          { children: '스타일링: TailwindCSS, Shadcn/ui' },
          { children: 'CI/CD: Github Actions' },
          { children: '테스트: Vitest, MSW' },
          { children: '패키지 매니저: PNPM' },
        ]}
        figures={[
          { src: codedang1, alt: '코드당 메인 화면' },
          { src: codedang2, alt: '코드당 문제 풀이 화면' },
          { src: codedang3, alt: '코드당 어드민 화면' },
        ]}
      />
    </MainSection>
  );
}
