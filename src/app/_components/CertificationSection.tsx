import { List } from '@/components/List';
import { MainSection } from '@/components/MainSection';
import { SubSection } from '@/components/SubSection';

export function CertificationSection() {
  return (
    <MainSection title="자격증">
      <SubSection>
        <List
          items={[
            { children: '오픽 IH (영어) - 2024.03' },
            { children: '삼성전자 SW 역량테스트 B형 (C++) - 2024.02' },
            { children: '정보처리산업기사 - 2022.09' },
            { children: '네트워크관리사 2급 - 2022.07' },
          ]}
        />
      </SubSection>
    </MainSection>
  );
}
