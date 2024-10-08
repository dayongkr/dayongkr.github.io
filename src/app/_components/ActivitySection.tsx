import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';

export function ActivitySection() {
  return (
    <MainSection title="활동">
      <SubSection title={{ title: '기술 글 작성', sub: { date: { from: { year: 2024, month: 7 }, to: 'current' } } }}>
        <List
          items={[
            {
              children:
                'ECMAScript 7 이후의 제안서와 명세서를 읽고, 이를 한국인 개발자에게 쉽게 전달하기 위해 깃허브 리포지토리에 정리 및 요약한 글을 작성하고 있습니다.',
              link: {
                title: '해당 리포지토리',
                href: 'https://github.com/dayongkr/ecmascript-summary',
              },
            },
            {
              children: '성능 분석 또는 최적화에 대한 경험을 바탕으로 글을 작성하고 있습니다.',
              link: {
                title: '블로그',
                href: 'https://velog.io/@dayongkr/posts',
              },
            },
          ]}
        />
      </SubSection>
      <SubSection
        title={{
          title: '삼성전자 DX 대학생 알고리즘 역량 강화 특강 수료',
          sub: { date: { from: { year: 2024, month: 1 }, to: { year: 2024, month: 2 } } },
        }}
      >
        <List
          items={[
            {
              children:
                '트라이, 세그먼트 트리, 라빈 카프 등의 알고리즘 이론을 학습하고, 문제를 분석하여 상황에 맞게 적용하는 방법을 배웠습니다.',
            },
            {
              children: '특강 중간에 진행된 SW 역량 테스트 B형에 C++ 언어로 응시하여 합격하였습니다.',
            },
          ]}
        />
      </SubSection>
      <SubSection
        title={{
          title: '교내 개발 동아리',
          link: { text: '스꾸딩' },
          sub: { date: { from: { year: 2023, month: 3 }, to: 'current' } },
        }}
      >
        <List
          items={[
            {
              children: '교내 개발 동아리 중 기술적으로 가장 활발한 스꾸딩에서 프론트엔드 팀장과 멘토로 활동했습니다.',
            },
            {
              children:
                '배포 지연으로 기존 부원들이 이탈하는 상황에서도 열심히 활동하여, 현재는 베타 테스트를 성공적으로 마쳤으며, 활동 인원도 약 10명에서 28명으로 성장하는 과정을 함께 했습니다.',
            },
            {
              children:
                '멘토로서 신입 부원 스터디를 운영하면서, 기술적 배경지식이 다른 팀원들과의 소통 능력을 향상했습니다.',
            },
            {
              children:
                '팀장 주도의 태스크 할당 방식을 자기 주도 방식으로 전환하여, 팀원들이 신뢰를 받으며 자율적으로 일할 수 있는 환경을 조성하여 팀 생산성을 높였습니다.',
            },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
