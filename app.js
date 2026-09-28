// Data Configuration
        let dashboardSettings = { memberCount: 16 };

        let schedules = [
            { date: "2026. 09. 26", status: "Upcoming", title: "09월 정기 모임", book: "사피엔스", location: "공간너섬 용산역점", time: "15:00 - 18:00" },
            { date: "2026. 07. 25", status: "Past", title: "07월 정기 모임", book: "작별하지 않는다", location: "공간너섬 용산역점", time: "13:00 - 16:00" },
            { date: "2026. 06. 27", status: "Past", title: "06월 정기 모임", book: "앨저넌에게 꽃을", location: "공간너섬 용산역점", time: "14:00 - 17:00" },
            { date: "2026. 05. 31", status: "Past", title: "05월 정기 모임", book: "돈 없이 살 수 없는 것들", location: "공간너섬 용산역점", time: "15:00 - 18:00" },
            { date: "2026. 04. 25", status: "past", title: "04월 정기 모임", book: "인어가 잠든 집", location: "워크토크 잠실점", time: "15:00 - 18:00" },
            { date: "2026. 03. 28", status: "past", title: "03월 정기 모임", book: "천 개의 파랑", location: "공간너섬 용산역점", time: "14:00 - 17:00" },
            { date: "2026. 02. 07", status: "Past", title: "2026년 OT", book: "새 멤버 소개 및 앞으로의 활동 계획", location: "공간너섬 용산역점", time: "17:00 - 21:00" },
            { date: "2026. 01. 03", status: "Past", title: "01월 정기 모임", book: "죄와 벌", location: "리얼컨퍼런스 용산점", time: "14:30 - 18:00" },
            { date: "2025. 11. 29", status: "Past", title: "11월 정기 모임", book: "물고기는 존재하지 않는다", location: "리얼컨퍼런스 용산점", time: "14:00 - 17:00" },
            { date: "2025. 10. 25", status: "Past", title: "10월 정기 모임", book: "그대를 사랑합니다", location: "회의실D 마포점", time: "14:00 - 17:00" },
            { date: "2025. 07. 26", status: "Past", title: "07월 정기 모임", book: "그리스인 조르바", location: "회의실D 공덕점", time: "15:00 - 18:00" },
            { date: "2025. 06. 28", status: "Past", title: "06월 정기 모임", book: "페스트", location: "리얼컨퍼런스 용산점", time: "13:00 - 16:00" },
            { date: "2025. 05. 31", status: "Past", title: "05월 정기 모임", book: "나쁜 사마리안인들", location: "리얼컨퍼런스 용산점", time: "12:00 - 15:00" },
            { date: "2025. 04. 26", status: "Past", title: "04월 정기 모임", book: "셰임머신", location: "MOiM 왕십리점", time: "15:00 - 18:00" },
            { date: "2025. 03. 29", status: "Past", title: "03월 정기 모임", book: "모순", location: "공존아지트 용산역점", time: "15:00 - 18:00" },
            { date: "2025. 02. 22", status: "Past", title: "02월 정기 모임", book: "경제학 콘서트2", location: "콜립라운지 강남점", time: "15:00 - 18:00" },
            { date: "2025. 01. 25", status: "Past", title: "01월 정기 모임", book: "국가론", location: "엘리멘터리 강남점", time: "13:00 - 17:00" }
        ];

        let books = [
            {
                title: "국가론",
                author: "플라톤",
                authorInfo: "고대 그리스의 철학자. 소크라테스의 제자이자 아리스토텔레스의 스승으로, 서양 철학의 근간을 마련한 인물.",
                genre: "인문/철학",
                image: "images_book/the theory of statehood.jpg",
                fullSummary: "소크라테스와의 대화 형식으로 구성된 이 책은, 이상적인 국가의 모습과 정의의 본질, 그리고 철학자가 통치해야 하는 이유에 대해 깊이 있게 탐구합니다.",
                topic: "현대 사회에서 우리가 지향해야 할 정의로운 공동체란 무엇인가?",
                questions: [
                    "1. 소크라테스가 말하는 '정의'란 개인과 국가에 각각 어떤 의미인가요?",
                    "2. 철학인 왕이 다스리는 '칼리폴리스(Kallipolis)'는 현실적으로 가능한가요?",
                    "3. 동굴의 비유가 현대 사회에서 우리에게 시사하는 바는 무엇일까요?"
                ],
                materialUrl: "https://drive.google.com/file/d/1aIPAwqJcYah7HqXQIeDV3NIaSjyqPkT6/view?usp=sharing"
            },
            {
                title: "경제학 콘서트 2",
                author: "팀 하포드",
                authorInfo: "일상 속에 숨겨진 경제학의 원리를 쉽고 재미있게 풀어내는 영국의 저명한 경제학자이자 저널리스트.",
                genre: "사회/경제",
                image: "images_book/경제학 콘서트2.jpg",
                fullSummary: "우리의 일상적인 결정, 나아가 범죄나 정치 현상 등 겉보기에는 경제학이 아닌 것 같은 문제들조차 어떻게 경제학적 논리로 설명될 수 있는지를 흥미롭게 보여줍니다.",
                topic: "일상 속의 복잡한 문제들을 경제학적으로 해결해본 경험이 있나요?",
                questions: [
                    "1. 합리적인 선택이라고 생각했던 결정이 나중에 비합리적으로 밝혀진 경험이 있나요?",
                    "2. 보이지 않는 유인(Incentive)이 사람들의 행동을 긍정적 혹은 부정적으로 바꾼 사례는?",
                    "3. 경제학적 시선으로 세상을 보는 것이 우리의 삶을 더 낫게 만들 수 있을까요?"
                ],
                materialUrl: "discussion materials/경제학_콘서트2_발제문.pdf"
            },
            {
                title: "모순",
                author: "양귀자",
                authorInfo: "인간 삶의 세밀한 감정과 사회적 모순을 통찰력 있게 그려내는 한국의 대표적인 소설가.",
                genre: "문학/소설",
                image: "images_book/모순_양귀자.jpg",
                fullSummary: "쌍둥이 이모와 어머니의 상반된 삶, 그리고 20대 후반 안진진의 연애와 결혼 선택을 통해 인생에 내재된 근원적인 모순과 예측 불가능성을 그려낸 명작입니다.",
                topic: "우리의 삶을 지탱하는 모순과 불행은 어떤 의미를 갖는가?",
                questions: [
                    "1. 안진진의 마지막 선택(결혼 상대)에 대해 어떻게 생각하시나요?",
                    "2. 쌍둥이 이모와 어머니 중, 나의 삶은 어느 쪽에 더 가깝다고 느끼나요?",
                    "3. 우리 삶에서 '모순'을 받아들임으로써 얻게 되는 것은 무엇일까요?"
                ],
                materialUrl: "discussion materials/모순_발제문.pdf"
            },
            {
                title: "셰임 머신",
                author: "캐시 오닐",
                authorInfo: "수학자이자 데이터 과학자. 알고리즘과 빅데이터가 사회적 불평등을 어떻게 악화시키는지 연구하는 학자.",
                genre: "사회/경제",
                image: "images_book/쎼임머신.jpg",
                fullSummary: "현대 사회와 디지털 플랫폼이 어떻게 사람들의 '수치심'을 무기화하여 이익을 창출하고 대중을 통제하는지 날카롭게 해부합니다.",
                topic: "디지털 시대의 '수치심 산업'에 대항해 개인의 존엄을 지키는 방법은?",
                questions: [
                    "1. 소셜 미디어에서 타인에게 수치심을 주거나, 반대로 수치심을 느껴본 경험이 있나요?",
                    "2. '수치심 산업'에 대항하여 개인이 취할 수 있는 가장 효과적인 방어책은 무엇일까요?",
                    "3. 건강한 사회적 규범과 폭력적인 '조리돌림'의 경계는 어디일까요?"
                ],
                materialUrl: "discussion materials/셰임머신_발제문.pdf"
            },
            {
                title: "나쁜 사마리안인들",
                author: "장하준",
                authorInfo: "세계적인 경제학자. 주류 경제학의 통념에 도전하며 개발도상국을 위한 현실적인 경제 정책을 주장함.",
                genre: "사회/경제",
                image: "images_book/나쁜사마리아인들.jpg",
                fullSummary: "자유무역과 세계화가 개발도상국에 진정으로 도움이 되는지 묻고, 선진국들이 과거 자신들이 썼던 보호무역이라는 '사다리'를 걷어차고 있음을 비판합니다.",
                topic: "자유무역과 경제 성장의 관계에 대해 우리는 어떤 관점을 가져야 할까?",
                questions: [
                    "1. 자유무역주의가 진정으로 '공정'한 룰을 제공하고 있다고 생각하나요?",
                    "2. 선진국들의 '사다리 걷어차기'에 맞서 개발도상국은 어떤 전략을 취해야 할까요?",
                    "3. 개인의 삶에서도 '사다리 걷어차기'와 같은 위선적 구조를 경험한 적이 있나요?"
                ],
                materialUrl: "discussion materials/나쁜_사마리아인_발제문.pdf"
            },
            {
                title: "페스트",
                author: "알베르 카뮈",
                authorInfo: "프랑스의 실존주의 문학을 대표하는 소설가이자 사상가. 노벨 문학상 수상자.",
                genre: "문학/소설",
                image: "images_book/페스트.jpg",
                fullSummary: "알제리의 작은 도시 오랑에 페스트가 퍼지면서 폐쇄된 도시 안에서 질병과 죽음에 직면한 다양한 인간 군상의 태도와 연대의 의미를 조명합니다.",
                topic: "예기치 못한 거대한 재앙 앞에서 인간이 취해야 할 가장 숭고한 자세는?",
                questions: [
                    "1. 소설 속 등장인물(리외, 타루, 랑베르 등) 중 가장 공감 가는 인물은 누구인가요?",
                    "2. 재앙 속에서도 자신의 직분을 다하는 리외의 '성실성'이 주는 울림은 무엇인가요?",
                    "3. 현대 사회에서 '페스트'가 상징하는 것은 무엇일까요?"
                ],
                materialUrl: "https://magical-health-414.notion.site/2ec3280b7f8380f284b3fa2b2a9e9acd?source=copy_link"
            },
            {
                title: "그리스인 조르바",
                author: "니코스 카잔차키스",
                authorInfo: "현대 그리스 문학을 대표하는 작가. 인간의 자유와 영혼의 구원에 평생을 바친 사상가.",
                genre: "인문/철학",
                image: "images_book/그리스인 조르바.jpg",
                fullSummary: "지식인인 '나'와 육체적이고 야성적인 본능으로 살아가는 자유인 '조르바'의 만남을 통해 진정한 삶의 기쁨과 자유의 의미를 묻습니다.",
                topic: "진정한 '자유'란 무엇이며, 우리는 삶을 얼마나 뜨겁게 사랑하고 있는가?",
                questions: [
                    "1. 내가 생각하는 진정한 '자유'란 무엇이며, 나는 현재 얼마나 자유로운가요?",
                    "2. 이성과 논리로 무장한 '나'와 직관으로 살아가는 '조르바' 중 나는 어느 쪽에 더 가깝나요?",
                    "3. 책을 읽는다는 행위가 조르바의 시선에서는 어떻게 비칠까요?"
                ],
                materialUrl: "discussion materials/그리스인_조르바_발제문.pdf"
            },
            {
                title: "그대를 사랑합니다",
                author: "강풀",
                authorInfo: "따뜻한 시선과 탄탄한 스토리텔링으로 수많은 독자의 사랑을 받는 웹툰 1세대 작가.",
                genre: "에세이/예술",
                image: "images_book/그대를사랑합니다.jpg",
                fullSummary: "노년에 찾아온 풋풋한 사랑, 그리고 평생을 헌신한 노부부의 아프고도 깊은 사랑을 통해 삶과 이별에 대한 따뜻한 시선을 보여줍니다.",
                topic: "삶의 끝자락에서도 변하지 않는 소중한 가치는 무엇일까요?",
                questions: [
                    "1. 나이가 들어감에 따라 사랑의 모양과 온도는 어떻게 변해간다고 생각하시나요?",
                    "2. 만약 내 남은 생애가 얼마 남지 않았다면, 누구와 어떤 사랑을 나누고 싶나요?",
                    "3. 가족과 연인을 떠나보낼 때, 가장 이상적인 '이별의 방식'은 무엇일까요?"
                ],
                materialUrl: "#"
            },
            {
                title: "물고기는 존재하지 않는다",
                author: "룰루 밀러",
                authorInfo: "과학 전문 기자이자 논픽션 작가. 과학적 사실과 개인적인 에세이를 교차시키며 철학적 질문을 던짐.",
                genre: "에세이/예술",
                image: "images_book/물고기.jpg",
                fullSummary: "분류학자 데이비드 스타 조던의 삶을 추적하는 과정에서, 자연의 질서란 인간이 만들어낸 허상이며 그 혼돈 속에서 오히려 삶의 의미를 찾게 되는 반전의 논픽션.",
                topic: "우리가 믿어온 질서가 무너질 때, 우리는 어디서 희망을 찾아야 하는가?",
                questions: [
                    "1. 오랫동안 굳게 믿어왔던 '진실'이나 '질서'가 무너졌을 때, 어떻게 극복하셨나요?",
                    "2. 자연에 '위계'가 없다는 사실이 인간 사회에 던지는 메시지는 무엇일까요?",
                    "3. 우주적 관점에서 우리가 먼지 같은 존재라면, 무엇이 우리 삶을 의미 있게 만드나요?"
                ],
                materialUrl: "https://drive.google.com/file/d/1_57zq2R8aLEZGq-0HBugB4XSVi8UkoeL/view?usp=drive_link"
            },
            {
                title: "죄와 벌",
                author: "표도르 도스토예프스키",
                authorInfo: "인간 심연의 어두운 본성과 구원을 탐구한 19세기 러시아 문학의 거장.",
                genre: "문학/소설",
                image: "images_book/죄와벌.jpg",
                fullSummary: "가난한 대학생 라스콜니코프가 '비범인은 평범한 인간의 도덕을 초월할 권리가 있다'는 사상에 빠져 살인을 저지른 후 겪는 처절한 심리적 고뇌와 소냐를 통한 구원의 과정.",
                topic: "인간이 법과 도덕을 초월할 수 있는 권리를 가질 수 있는가?",
                questions: [
                    "1. 비범한 목적을 위해 평범한 도덕이나 법을 위반해도 된다는 사상에 대해 어떻게 생각하나요?",
                    "2. 라스콜니코프가 죄책감을 느끼기 시작한 근본적인 이유는 무엇일까요?",
                    "3. 고통과 속죄를 통해서만 인간이 구원받을 수 있다는 관점에 동의하시나요?"
                ],
                materialUrl: "discussion materials/죄와벌_발제문.pdf"
            },
            {
                title: "천 개의 파랑",
                author: "천선란",
                authorInfo: "상상력과 따뜻한 시선으로 한국 SF 문학의 새로운 장을 열어가고 있는 소설가.",
                genre: "과학/SF",
                image: "images_book/천개의파랑.jpg",
                fullSummary: "폐기될 위기에 처한 휴머노이드 기수 '콜리'와 안락사를 앞둔 경주마 '투데이', 그리고 휠체어를 타는 은혜와 그 가족들이 서로의 상처를 안아주며 연대하는 감동적인 SF.",
                topic: "기술이 발전한 미래에도 변하지 않는 '다정함'과 '교감'의 가치는 무엇인가?",
                questions: [
                    "1. 로봇인 콜리가 인간보다 더 '인간적인' 다정함을 보여주는 이유는 무엇일까요?",
                    "2. 효율성과 속도만을 강조하는 사회에서 '천천히 달리는 연습'이 의미하는 바는?",
                    "3. 다름과 결핍을 가진 존재들이 연대함으로써 만들어내는 힘은 어느 정도일까요?"
                ],
                materialUrl: "https://drive.google.com/file/d/1MgEJXjFB9X_xvJuHNCCCWQo91SoJy3jO/view?usp=drive_link",
                summaryUrl: "discussion materials/천 개의 파랑_요약본.pdf"

            },
            {
                title: "인어가 잠든 집",
                author: "히가시노 게이고",
                authorInfo: "섬세한 심리 묘사와 사회적 이슈를 결합하여 깊은 여운을 남기는 일본의 미스터리 대가.",
                genre: "소설/미스터리",
                image: "images_book/인어가 잠든 집.jpg",
                fullSummary: "갑작스러운 사고로 뇌사 상태에 빠진 딸과 그 죽음을 인정하지 못하는 부모가 기술의 힘을 빌려 생명을 연장하며 벌어지는 윤리적 갈등과 슬픔의 기록.",
                topic: "과학 기술이 삶을 연장할 때, 죽음의 경계는 어디이며 우리는 무엇을 생명이라 부를 수 있는가?",
                questions: [
                    "1. 나라면 뇌사 상태의 아이를 기술의 힘으로 연명시킬 것인가요?",
                    "2. 이 작품에서 묻는 '인간의 죽음을 판정하는 기준'은 과학인가요, 사랑인가요?",
                    "3. 타인의 슬픔에 대해 우리가 어디까지 간섭하고 판단할 수 있을까요?"
                ],
                materialUrl: "discussion materials/인어가잠든집_발제문.pdf"
            },
            {
                title: "돈으로 살 수 없는 것들",
                author: "마이클 샌델",
                authorInfo: "하버드 대학교 정치학과 교수이자 세계적인 공동체주의 철학자. 저서 《정의란 무엇인가》와 《돈으로 살 수 없는 것들》을 통해 현대 사회의 윤리적 딜레마와 시장 만능주의의 한계를 날카롭게 파헤쳤습니다.",
                genre: "사회/경제",
                image: "images_book/돈으로살수없는것들.jpg",
                fullSummary: "시장 지배력이 전통적인 비시장 영역으로 확대됨에 따라 발생하는 도덕적, 철학적 문제를 다룹니다. 교육, 건강, 환경, 시민정신 등 삶의 모든 가치에 가격표가 붙는 현실 속에서, 시장의 한계와 공동체적 정의를 어떻게 복원할 것인지 질문합니다.",
                topic: "모든 것에 가격표가 붙는 시장 만능주의 시대에 우리가 지켜내야 할 도덕적 가치는 무엇인가?",
                questions: [
                    "1. 돈으로 살 수 없는 것(또는 사서는 안 되는 것)이 있다면 무엇이며, 왜 그렇게 생각하시나요?",
                    "2. 줄서기 대행 서비스나 광고판이 된 이마와 같이 일상의 시장화에 대해 어떻게 평가하시나요?",
                    "3. 시장 경제와 시장 사회의 경계를 구분 짓기 위해 공동체가 해야 할 합의는 무엇일까요?"
                ],
                materialUrl: "discussion materials/돈으로_살_수_없는_것들_발제문.pdf",
                summaryUrl: "discussion materials/돈으로_살_수_없는_것들_요약본.pdf"
            },
            {
                title: "앨저넌에게 꽃을",
                author: "다니엘 키스",
                authorInfo: "미국의 소설가이자 심리학자. 지적장애를 가진 주인공 찰리의 심리를 섬세한 일기 형식으로 묘사한 대표작 《앨저넌에게 꽃을》로 휴고상과 네뷸러상을 모두 수상하며 세계적인 작가 반열에 올랐습니다.",
                genre: "과학/SF",
                image: "images_book/앨저넌에게 꽃을.jpg",
                fullSummary: "지능지수 68의 지적장애인 찰리 고든은 뇌 수술을 통해 지능을 향상시키는 획기적인 실험의 대상이 됩니다. 실험용 흰쥐 앨저넌과 같은 수술을 받은 찰리는 지능이 급격히 발달하여 천재가 되지만, 지능의 성장과 함께 인간 세상의 위선과 외로움을 깨닫게 됩니다. 그러나 얼마 지나지 않아 앨저넌에게서 부작용으로 인한 지능 퇴화가 관찰되고, 찰리 역시 자신에게 닥쳐올 비극적인 운명을 예감하게 됩니다.",
                topic: "지능의 발달이 인간에게 주는 참된 행복과, 지성이 지니는 한계 및 사랑의 가치에 대하여",
                questions: [
                    "1. 찰리가 지능을 얻기 전과 천재가 된 후, 각각의 상태에서 느꼈던 행복과 불행은 어떻게 다른가요?",
                    "2. 지능이 비약적으로 향상된 찰리를 대하는 주변 사람들의 태도 변화가 시사하는 사회적 수치심이나 편견은 무엇일까요?",
                    "3. '지능이 사랑을 주고받는 능력을 대체할 수는 없다'는 작가의 메시지에 대해 어떻게 생각하시나요?"
                ],
                materialUrl: "discussion materials/앨저넌에게 꽃을_발제문.pdf"
            },
            {
                title: "작별하지 않는다",
                author: "한강",
                authorInfo: "한국인 최초로 노벨 문학상을 수상하며 전 세계에 인간의 내면적 상처와 역사적 트라우마를 심도 깊게 전달하는 소설가.",
                genre: "문학/소설",
                image: "images_book/작별하지 않는다.jpg",
                fullSummary: "제주 4·3 사건의 기억을 품은 친구 인선의 집을 방문한 주인공 경하가, 그곳에 스며 있는 고통스러운 역사적 상처와 지극한 사랑의 흔적을 발견하며 멈추지 않는 애도를 이어가는 이야기.",
                topic: "지우려 해도 지워지지 않는 역사적 비극 앞에서 우리가 기억을 통해 '작별하지 않는' 진정한 태도는 무엇인가?",
                questions: [
                    "1. 소설 속에서 반복적으로 등장하는 '눈(Snow)'과 '새'는 역사적 상처와 사자(死者)들을 향해 어떤 의미를 드러내고 있을까요?",
                    "2. 타인의 깊은 고통과 슬픔을 온전히 이해하고 연대한다는 것은 가능한 일일까요? 작가가 말하는 '지극한 사랑'의 관점에서 생각해 봅시다.",
                    "3. 아픈 과거사를 잊지 않고 '작별하지 않는 상태'로 둔다는 것은 남겨진 이들의 삶에 어떠한 가치와 의무를 부여할까요?"
                ],
                materialUrl: "discussion materials/작별하지 않는다_발제문.pdf ",
                summaryUrl: " "
            },
            {
                title: "사피엔스",
                author: "유발 하라리",
                authorInfo: "역사, 생물학, 철학을 넘나들며 인류의 과거와 미래를 거시적인 통찰로 엮어내는 세계적인 역사학자.",
                genre: "인문/철학",
                image: "images_book/사피엔스.webp",
                fullSummary: "인지 혁명, 농업 혁명, 과학 혁명을 거치며 변방의 유인원이었던 호모 사피엔스가 어떻게 지구의 지배자가 되었는지 인류의 방대한 역사를 추적하고, 인간의 근원적인 행복과 미래를 묻는 통찰력 있는 저작.",
                topic: "인지 혁명을 통해 거대한 권력을 쥔 사피엔스는 과연 과거보다 더 행복해졌으며, 앞으로 어떤 존재로 진화해야 하는가?",
                questions: [
                    "1. 인지 혁명의 핵심인 '허구를 믿는 능력(종교, 국가, 자본주의 등)'이 현대 사회에서 나의 삶을 어떻게 지배하고 있나요?",
                    "2. 유발 하라리는 농업 혁명을 '인류 역사상 최대의 사기극'이라고 표현했습니다. 문명의 발전과 편리함이 개인의 행복을 보장한다고 생각하시나요?",
                    "3. 과학 혁명과 생명공학의 발전으로 스스로를 신으로 업그레이드하려는 인류의 미래는 어떤 모습일 것이며, 우리는 무엇을 두려워해야 할까요?"
                ],
                materialUrl: "discussion materials/사피엔스_발제문.pdf",
                summaryUrl: "discussion materials/사피엔스_요약본.pdf"
            }

        ];

        let quotesData = [
            { text: "스스로 통치하려 하지 않는 가장 큰 벌은, 자기보다 못한 사람의 지배를 받는 것이다.", book: "국가론" },
            { text: "세상이 불공평해 보이는 것은 우리가 그 이면의 논리를 보지 못하기 때문이다. 합리성은 생각보다 깊은 곳에 숨어 있다.", book: "경제학 콘서트 2" },
            { text: "인생은 탐구하면서 살아가는 것이 아니라, 살아가면서 탐구하는 것이다. 실수는 되풀이된다. 그것이 인생이다.", book: "모순" },
            { text: "수치심은 수익을 창출하는 강력한 도구다. 그것은 우리의 주의를 끌고, 우리를 분열시키며, 결국 보이지 않는 권력을 살찌운다.", book: "셰임 머신" },
            { text: "강자들은 항상 자신들이 올라온 사다리를 걷어차 버린다. 그것이 그들이 정상의 자리를 지키는 가장 쉬운 방법이기 때문이다.", book: "나쁜 사마리아인들" },
            { text: "이 모든 일은 영웅주의와는 상관이 없습니다. 페스트와 싸우는 유일한 방법은 성실성입니다.", book: "페스트" },
            { text: "나는 아무것도 바라지 않는다. 나는 아무것도 두려워하지 않는다. 나는 자유다.", book: "그리스인 조르바" },
            { text: "당신을 만나서, 내 남은 인생이 정말 따뜻했소. 그대를... 사랑합니다.", book: "그대를 사랑합니다" },
            { text: "어떤 사람에게 민들레는 잡초처럼 보일지 모르지만, 다른 사람에게는 약초가 될 수 있다. 중요성은 우리가 부여하는 것이다.", book: "물고기는 존재하지 않는다" },
            { text: "인간에게는 적어도 단 한 군데쯤은, 자기를 불쌍히 여겨 줄 곳이, 아무 조건 없이 받아줄 곳이 있어야만 하는 법이니까요.", book: "죄와 벌" },
            { text: "천천히 달리는 연습을 할 거야. 다치지 않고 멀리 가기 위해서.", book: "천 개의 파랑" },
            { text: "사랑하는 사람의 죽음을 인정하는 일, 그것은 남겨진 자가 해야 할 가장 잔인하고도 숭고한 의무일지도 모른다.", book: "인어가 잠든 집" },
            { text: "시장의 가치가 삶의 모든 영역을 지배하기 시작할 때, 우리는 더 이상 시민으로 살아가는 것이 아니라 단순히 소비자로 전락하게 됩니다.", book: "돈으로 살 수 없는 것들" },
            { text: "지능은 인간이 가진 가장 위대한 선물 중 하나입니다. 하지만 사랑이 없는 지식은 아무런 가치도 없습니다.", book: "앨저넌에게 꽃을" },
            { text: "아무리 거센 눈보라가 치고 세상이 모두 얼어붙을지라도, 결코 잊지 않겠다는 지극한 사랑만큼은 풍화되지 않습니다.", book: "작별하지 않는다" },
            { text: "스스로 무엇을 원하는지도 모르는 채 불만스러워하며 무책임한 신들, 이보다 더 위험한 존재가 또 있을까?", book: "사피엔스" },
        ].map((quote, index, allQuotes) => ({
            ...quote,
            // 기존 목록은 아래쪽일수록 최근에 추가된 문장입니다.
            sortOrder: allQuotes.length - index
        }));

        // 1. Scroll Animations
        function initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }

        // 2. Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });

        // 3. Quotes Renderer
        function compareQuotesNewestFirst(a, b) {
            const aOrder = Number(a.sortOrder) || 0;
            const bOrder = Number(b.sortOrder) || 0;
            // 기존 문장을 가져올 때는 1이 가장 최근 문장(사피엔스)이 되도록 저장되었습니다.
            // 이후 새 문장은 Date.now() 기반의 큰 값으로 저장되므로 두 형식을 모두 처리합니다.
            const aIsImported = aOrder > 0 && aOrder < 1000000;
            const bIsImported = bOrder > 0 && bOrder < 1000000;

            if (aIsImported && bIsImported) return aOrder - bOrder;
            if (aIsImported) return 1;
            if (bIsImported) return -1;
            return bOrder - aOrder;
        }

        function renderQuotes() {
            const container = document.getElementById('quote-container');
            const newestFirst = quotesData.slice().sort(compareQuotesNewestFirst);
            container.innerHTML = newestFirst.map(q => `
                <div class="min-w-[300px] md:min-w-[400px] bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <svg class="w-8 h-8 text-[#8D6E63] mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                    <p class="text-sm md:text-base leading-relaxed mb-6 italic">"${escapeHtml(q.text)}"</p>
                    <p class="text-xs text-[#8D6E63] font-bold text-right tracking-widest">- ${escapeHtml(q.book)} -</p>
                </div>
            `).join('');
        }

        // 4. Accordion Schedules
        function renderAccordionSchedules() {
            const today = new Date();
            const container = document.getElementById('accordion-container');

            const grouped = schedules.reduce((acc, item) => {
                const eventDate = new Date(item.date.replace(/\. /g, '-').replace(/\./g, '-'));
                item.currentStatus = eventDate > today || item.date === "미정" ? 'Upcoming' : 'Completed';

                const year = item.date === "미정" ? today.getFullYear().toString() : item.date.split('.')[0];
                if (!acc[year]) acc[year] = [];
                acc[year].push(item);
                return acc;
            }, {});

            const sortedYears = Object.keys(grouped).sort((a, b) => b - a);

            container.innerHTML = sortedYears.map((year, index) => {
                const isOpen = index === 0;
                return `
                    <div class="border-b border-[#8D6E63]/20 bg-white rounded-lg px-6 shadow-sm mb-4 transition-all">
                        <button onclick="toggleAccordion('${year}')" class="w-full py-6 flex justify-between items-center text-[#3E2723] focus:outline-none group">
                            <span class="font-serif text-2xl group-hover:text-[#8D6E63] transition-colors">${year}</span>
                            <svg id="icon-${year}" class="w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#8D6E63]' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="content-${year}" class="accordion-content ${isOpen ? 'active pb-6' : ''} space-y-6">
                        ${grouped[year].map(item => {
                    const isUpcoming = item.currentStatus === 'Upcoming';
                    return `
                                <div class="pl-4 custom-border-left ${isUpcoming ? 'upcoming-highlight bg-[#8D6E63]/5' : ''} pb-4 mb-2">
                                    <div class="flex items-center gap-3">
                                        <span class="text-[11px] font-bold ${isUpcoming ? 'text-[#8D6E63]' : 'text-gray-400'} uppercase tracking-widest">${item.date}</span>
                                        ${isUpcoming ? '<span class="animate-pulse text-[9px] bg-[#8D6E63] text-white px-2.5 py-0.5 rounded-full font-bold">UPCOMING</span>' : ''}
                                    </div>
                                    <h4 class="text-lg md:text-xl font-serif text-[#3E2723] mt-2 mb-1">${item.title}</h4>
                                    <p class="text-[13px] text-gray-600 font-medium mb-2">"${item.book}"</p>
                                    <div class="flex flex-wrap justify-between items-end mt-3 gap-3">
                                        <p class="text-[11px] text-gray-500 flex items-center gap-2">
                                            <span>📍 ${item.location}</span>
                                            <span class="text-gray-300">|</span>
                                            <span>⏰ ${item.time}</span>
                                        </p>
                                        ${window.isAdmin && item.id ? `
                                        <div class="flex gap-2 mr-6">
                                            <button onclick='editSchedule("${item.id}")' class="text-[11px] text-[#5D4037] hover:text-white bg-white hover:bg-[#8D6E63] px-3 py-1 rounded border border-[#8D6E63]/30 shadow-sm transition-colors">수정</button>
                                            <button onclick='deleteSchedule("${item.id}")' class="text-[11px] text-red-500 hover:text-white bg-white hover:bg-red-500 px-3 py-1 rounded border border-red-400/30 shadow-sm transition-colors">삭제</button>
                                        </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `;
                }).join('')}
                    </div></div>
                `;
            }).join('');
        }

        window.toggleAccordion = function (year) {
            const content = document.getElementById(`content-${year}`);
            const icon = document.getElementById(`icon-${year}`);

            if (content.classList.contains('active')) {
                content.classList.remove('active');
                content.classList.remove('pb-6');
                icon.classList.remove('rotate-180', 'text-[#8D6E63]');
            } else {
                content.classList.add('active');
                content.classList.add('pb-6');
                icon.classList.add('rotate-180', 'text-[#8D6E63]');
            }
        };

        // 5. Books Rendering & Filtering
        function renderBooks(filter = 'All') {
            const bookGrid = document.getElementById('book-grid');
            bookGrid.innerHTML = '';

            let filtered = books;
            if (filter !== 'All') {
                if (filter === '과학') {
                    filtered = books.filter(b => b.genre.includes('과학/SF') || b.genre.includes('소설/미스터리'));
                } else {
                    filtered = books.filter(b => b.genre.includes(filter));
                }
            }

            if (filtered.length === 0) {
                bookGrid.innerHTML = `<p class="col-span-full text-center text-gray-400 py-12 text-sm">해당 장르의 도서가 없습니다.</p>`;
                return;
            }

            filtered.forEach((book) => {
                // 같은 제목의 도서도 안전하게 열 수 있도록 배열 위치를 사용합니다.
                const originalIndex = books.indexOf(book);

                bookGrid.innerHTML += `
                    <div onclick="openModal(${originalIndex})" class="group flex flex-col items-center cursor-pointer w-full">
                        <div class="relative w-32 h-44 sm:w-36 sm:h-48 md:w-48 md:h-64 overflow-hidden rounded-md shadow-md transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl bg-white">
                            <img src="${book.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${book.title}" onerror="this.src='https://via.placeholder.com/200x300?text=No+Cover'">
                            <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/20 to-transparent"></div>
                            <!-- 덮개 효과 -->
                            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        
                        <div class="mt-5 text-center px-2">
                            <span class="text-[9px] text-[#8D6E63] px-2 py-0.5 border border-[#8D6E63]/30 rounded-full mb-2 inline-block">${book.genre}</span>
                            <h3 class="text-[#3E2723] font-serif text-base md:text-lg font-bold group-hover:text-[#8D6E63] transition-colors leading-tight line-clamp-1">${book.title}</h3>
                            <p class="text-[10px] text-gray-500 uppercase tracking-widest mt-1.5">${book.author}</p>
                        </div>
                    </div>
                `;
            });
        }

        // Filter 버튼 이벤트
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'bg-[#8D6E63]', 'text-white'));
                e.target.classList.add('active');
                renderBooks(e.target.dataset.filter);
            });
        });

        // 6. Modal Functions
        const modal = document.getElementById('book-modal');
        const modalContent = document.getElementById('book-modal-content');

        window.openModal = function (index) {
            const book = books[index];
            const img = document.getElementById('modal-img');
            img.src = book.image;
            img.onerror = function () { this.src = 'https://via.placeholder.com/400x600?text=No+Cover'; };

            document.getElementById('modal-genre').innerText = book.genre;
            document.getElementById('modal-title').innerText = book.title;
            document.getElementById('modal-author').innerText = book.author;
            document.getElementById('modal-author-info').innerText = book.authorInfo || "";
            document.getElementById('modal-full-summary').innerText = book.fullSummary || book.summary;
            document.getElementById('modal-topic').innerText = book.topic;

            const questionsContainer = document.getElementById('modal-questions');
            if (book.questions && book.questions.length > 0) {
                questionsContainer.innerHTML = book.questions.map(q => `<li class="flex items-start"><span class="text-[#8D6E63] mr-2 font-serif text-lg leading-none mt-0.5">•</span><span>${q}</span></li>`).join('');
            } else {
                questionsContainer.innerHTML = '<li class="text-gray-400 italic">등록된 질문이 없습니다.</li>';
            }


            // 버튼과 컨테이너 요소를 가져옵니다 
            const materialLink = document.getElementById('modal-material-link');
            const summaryLink = document.getElementById('modal-summary-link');
            const materialContainer = document.getElementById('modal-material-container');
            const noMaterial = document.getElementById('modal-no-material');

            // 각각의 데이터가 유효한지 체크
            const hasMaterial = book.materialUrl && book.materialUrl.trim() !== "" && book.materialUrl !== "#";
            const hasSummary = book.summaryUrl && book.summaryUrl.trim() !== "" && book.summaryUrl !== "#";

            // 둘 중 하나라도 자료가 있다면 컨테이너 표시
            if (hasMaterial || hasSummary) {
                materialContainer.style.display = 'block';
                noMaterial.style.display = 'none';

                // 발제문 자료 버튼 개별 제어
                if (hasMaterial) {
                    materialLink.style.display = 'flex';
                    materialLink.href = book.materialUrl;
                } else {
                    materialLink.style.display = 'none';
                }

                // 요약본 자료 버튼 개별 제어
                if (hasSummary) {
                    summaryLink.style.display = 'flex';
                    summaryLink.href = book.summaryUrl;
                } else {
                    summaryLink.style.display = 'none';
                }
            } else {
                // 둘 다 자료가 없으면 안내 문구 표시
                materialContainer.style.display = 'none';
                noMaterial.style.display = 'block';
            }

            switchModalTab('info');

            modal.classList.remove('hidden');
            modal.classList.add('modal-active');
            setTimeout(() => { modalContent.classList.remove('scale-95'); modalContent.classList.add('scale-100'); }, 10);
            document.body.style.overflow = 'hidden';
        };

        window.switchModalTab = function (tab) {
            const infoTab = document.getElementById('tab-info');
            const recordsTab = document.getElementById('tab-records');
            const infoBtn = document.getElementById('tab-info-btn');
            const recordsBtn = document.getElementById('tab-records-btn');

            if (tab === 'info') {
                infoTab.classList.remove('hidden');
                recordsTab.classList.add('hidden');
                infoBtn.className = "pb-2 text-sm font-bold text-[#8D6E63] border-b-2 border-[#8D6E63] transition-colors";
                recordsBtn.className = "pb-2 text-sm font-bold text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition-colors";
            } else {
                infoTab.classList.add('hidden');
                recordsTab.classList.remove('hidden');
                recordsBtn.className = "pb-2 text-sm font-bold text-[#8D6E63] border-b-2 border-[#8D6E63] transition-colors";
                infoBtn.className = "pb-2 text-sm font-bold text-gray-400 border-b-2 border-transparent hover:text-gray-600 transition-colors";
            }
        };

        window.closeModal = function () {
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('modal-active');
                document.body.style.overflow = 'auto';
            }, 200);
        };

        window.onclick = function (event) {
            if (event.target == modal) closeModal();
        };

        let galleryPhotos = [
            { src: "our_moments/26.07.25.jpg", title: "2026.07.25" },
            { src: "our_moments/26.06.28.jpg", title: "2026.06.27" },
            { src: "our_moments/26.05.31.jpg", title: "2026.05.31" },
            { src: "our_moments/26.04.25.jpg", title: "2026.04.25" },
            { src: "our_moments/26.03.28.jpg", title: "2026.03.28" },
            { src: "our_moments/KakaoTalk_20251130_000330013_01.jpg", title: "2025.11.29" },
            { src: "our_moments/KakaoTalk_20250727_171311368_01.jpg", title: "2025.07.26" },
            { src: "our_moments/KakaoTalk_20250602_223447235.jpg", title: "2025.06.28" },
            { src: "our_moments/KakaoTalk_20250602_223442409.jpg", title: "2025.06.28" },
            { src: "our_moments/KakaoTalk_20250427_194914927_02.jpg", title: "2025.04.26" },
            { src: "our_moments/KakaoTalk_20250401_100146628_03.jpg", title: "2025.03.29" }
        ];

        // 2. 갤러리 렌더링 함수
        function renderGallery() {
            const container = document.getElementById('gallery-container');

            // 사진이 기울어지는 각도를 무작위처럼 보이게 하는 패턴 배열
            const rotations = ['-rotate-3', 'rotate-2', '-rotate-6', 'rotate-4', '-rotate-2', 'rotate-6'];

            container.innerHTML = galleryPhotos.map((photo, index) => {
                const rot = rotations[index % rotations.length]; // 각도 패턴 순환 적용
                const imageUrl = photo.imageUrl || photo.src;

                return `
                    <div class="relative w-40 md:w-56 bg-white p-3 pb-12 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-110 group ${rot} cursor-zoom-in hover:z-10" onclick="openLightbox('${imageUrl}')">
                        ${window.isAdmin ? `
                        <div class="absolute right-2 top-2 z-30 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onclick="event.stopPropagation(); openGalleryManager('${photo.id || ''}')" class="bg-white/95 px-2 py-1 rounded text-[10px] text-[#5D4037] shadow">수정</button>
                            ${photo.id ? `<button onclick="event.stopPropagation(); deleteGalleryPhoto('${photo.id}')" class="bg-white/95 px-2 py-1 rounded text-[10px] text-red-500 shadow">삭제</button>` : ''}
                        </div>` : ''}
                        
                        <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#F4F1EA]/80 backdrop-blur-sm shadow-sm rotate-[-3deg] z-20"></div>
                        
                        <img src="${imageUrl}" class="w-full h-40 md:h-56 object-cover" alt="${photo.title}">
                        
                        <p class="absolute bottom-4 left-0 w-full text-center font-serif text-[#5D4037] text-xs md:text-sm tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">${photo.title}</p>
                    </div>
                `;
            }).join('');
        }







        // 7. Lightbox
        window.openLightbox = function (src) {
            const lightbox = document.getElementById('lightbox-modal');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = src;
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.style.overflow = 'hidden';
        };

        window.closeLightbox = function () {
            const lightbox = document.getElementById('lightbox-modal');
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            if (document.getElementById('book-modal').classList.contains('hidden')) {
                document.body.style.overflow = 'auto';
            }
        };

        // 8. Mobile Menu
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        const menuIcon = document.getElementById('menu-icon');

        menuToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('hidden')) {
                navLinks.classList.remove('hidden');
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                navLinks.classList.add('hidden');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.add('hidden');
                    menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
                }
            });
        });

        // 9. Dashboard Logic
        function renderDashboard() {
            const today = new Date();
            const completedMeetings = schedules.filter(item => {
                if (item.date === "미정") return false;
                const eventDate = new Date(item.date.replace(/\. /g, '-').replace(/\./g, '-'));
                return eventDate <= today;
            });

            document.getElementById('stat-total-meetings').innerHTML = `${completedMeetings.length}<span class="text-lg ml-1">회</span>`;
            document.getElementById('stat-total-books').innerHTML = `${books.length}<span class="text-lg ml-1">권</span>`;
            document.getElementById('stat-members').innerHTML = `${dashboardSettings.memberCount}<span class="text-lg ml-1">명</span>`;

            const genreCounts = {};
            books.forEach(book => {
                const g = book.genre || "기타";
                genreCounts[g] = (genreCounts[g] || 0) + 1;
            });

            const genreContainer = document.getElementById('genre-container');
            genreContainer.innerHTML = '';

            Object.keys(genreCounts).sort((a, b) => genreCounts[b] - genreCounts[a]).forEach(genre => {
                const count = genreCounts[genre];
                const percentage = Math.round((count / books.length) * 100);

                genreContainer.innerHTML += `
                    <div>
                        <div class="flex justify-between text-[11px] font-bold text-gray-600 mb-2 uppercase tracking-wider">
                            <span>${genre} <span class="text-gray-400 font-normal ml-1">(${count}권)</span></span>
                            <span>${percentage}%</span>
                        </div>
                        <div class="w-full bg-gray-200/60 h-2 rounded-full overflow-hidden">
                            <div class="bg-[#8D6E63] h-full transition-all duration-1500 ease-out" style="width: 0%" data-width="${percentage}%"></div>
                        </div>
                    </div>
                `;
            });

            // Trigger animation for progress bars
            setTimeout(() => {
                document.querySelectorAll('#genre-container .bg-\\[\\#8D6E63\\]').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width');
                });
            }, 500);
        }

        // 10. Drag to Scroll for Quotes
        function initDragToScroll() {
            const slider = document.getElementById('quote-container');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.style.cursor = 'grab';

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.style.cursor = 'grabbing';
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5;
                slider.scrollLeft = scrollLeft - walk;
            });
        }
        // 11. Custom Scrollbar for Quotes (중앙 집중형 스크롤바, 드래그 및 클릭 이동 기능 추가)
        function initCustomScrollbar() {
            const container = document.getElementById('quote-container');
            const thumb = document.getElementById('custom-scrollbar-thumb');

            if (!container || !thumb) return;

            const track = thumb.parentElement;

            // 마우스 커서 스타일(UX) 추가
            track.style.cursor = 'pointer';
            thumb.style.cursor = 'grab';

            // --- [1] 위치 동기화 로직 (카드가 움직일 때 막대 이동) ---
            const updateScrollbar = () => {
                const scrollLeft = container.scrollLeft;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                if (maxScrollLeft <= 0) {
                    thumb.style.display = 'none';
                    return;
                }

                thumb.style.display = 'block';

                const thumbWidthPercent = Math.max((container.clientWidth / container.scrollWidth) * 100, 15);
                thumb.style.width = `${thumbWidthPercent}%`;

                const scrollRatio = scrollLeft / maxScrollLeft;
                const maxThumbMove = 100 - thumbWidthPercent;
                const thumbLeft = scrollRatio * maxThumbMove;

                thumb.style.left = `${thumbLeft}%`;
            };

            container.addEventListener('scroll', updateScrollbar);
            window.addEventListener('resize', updateScrollbar);
            setTimeout(updateScrollbar, 100);

            // --- [2] 마우스 드래그 로직 (막대를 잡고 움직일 때 카드 이동) ---
            let isDragging = false;
            let startX;
            let startScrollLeft;

            thumb.addEventListener('mousedown', (e) => {
                e.preventDefault(); // 기본 드래그 방지
                isDragging = true;
                thumb.style.cursor = 'grabbing';

                // 클릭한 순간의 마우스 X좌표와 컨테이너 스크롤 위치 저장
                startX = e.clientX;
                startScrollLeft = container.scrollLeft;

                // 드래그 중 화면 텍스트 선택 방지
                document.body.style.userSelect = 'none';
            });

            window.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                thumb.style.cursor = 'grab';
                document.body.style.userSelect = 'auto';
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();

                // 움직일 수 있는 최대 범위 계산
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                const maxThumbLeft = track.clientWidth - thumb.clientWidth;

                // 마우스가 이동한 픽셀 거리 계산
                const walkX = e.clientX - startX;

                // 막대 이동 비율을 컨테이너 스크롤 수치로 변환
                const scrollWalk = (walkX / maxThumbLeft) * maxScrollLeft;

                // 컨테이너 스크롤 이동 (updateScrollbar가 자동으로 막대 위치도 업데이트함)
                container.scrollLeft = startScrollLeft + scrollWalk;
            });

            // --- [3] 클릭 이동 로직 (빈 트랙을 클릭하면 해당 위치로 카드 이동) ---
            track.addEventListener('click', (e) => {
                if (e.target === thumb) return; // 막대 자체를 클릭한 것은 무시

                const trackRect = track.getBoundingClientRect();
                const clickX = e.clientX - trackRect.left;

                // 클릭한 위치의 중앙으로 막대가 오도록 비율 계산
                let clickRatio = (clickX - thumb.clientWidth / 2) / (track.clientWidth - thumb.clientWidth);

                // 비율이 0~1 범위를 벗어나지 않도록 보정
                clickRatio = Math.max(0, Math.min(1, clickRatio));

                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                // 부드럽게 스크롤 이동
                container.scrollTo({
                    left: clickRatio * maxScrollLeft,
                    behavior: 'smooth'
                });
            });
        }

        // Firebase 데이터 불러오기 및 실시간 동기화
        window.isAdmin = false;

        async function fetchSchedulesFromFirebase() {
            if (!window.db) return; // 설정 안되어 있으면 기본 데이터 사용
            
            return new Promise((resolve) => {
                // onSnapshot을 사용하여 실시간으로 데이터 변경사항을 구독합니다.
                window.db.collection('schedules').orderBy('date', 'desc').onSnapshot(snapshot => {
                    if (!snapshot.empty) {
                        schedules = [];
                        snapshot.forEach(doc => {
                            schedules.push({ id: doc.id, ...doc.data() });
                        });
                        // 데이터가 변경되면 화면을 즉시 새로고침
                        renderAccordionSchedules();
                        renderDashboard();
                    }
                    resolve(); // 첫 로딩 시에만 resolve 호출
                }, error => {
                    console.error("Firebase 실시간 동기화 에러:", error);
                    resolve();
                });
            });
        }

        // --- 관리자 기능 함수들 ---
        function openAdminLogin() {
            document.getElementById('admin-login-form').reset();
            document.getElementById('admin-login-modal').classList.remove('hidden');
            document.getElementById('admin-login-modal').classList.add('flex');
        }
        function closeAdminLogin() {
            document.getElementById('admin-login-modal').classList.add('hidden');
            document.getElementById('admin-login-modal').classList.remove('flex');
        }
        async function handleAdminLogin(e) {
            e.preventDefault();
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            if(!window.auth) return alert("Firebase 인증이 설정되지 않았습니다.");
            try {
                await window.auth.signInWithEmailAndPassword(email, password);
                closeAdminLogin();
            } catch(err) {
                alert("로그인 실패: 이메일과 비밀번호를 확인해주세요.");
            }
        }
        async function logoutAdmin() {
            if(window.auth) {
                await window.auth.signOut();
            }
        }

        function openScheduleForm(id = null) {
            const modal = document.getElementById('admin-schedule-modal');
            const form = document.getElementById('admin-schedule-form');
            form.reset();
            document.getElementById('admin-schedule-id').value = "";
            document.getElementById('admin-form-title').innerText = "새로운 일정 추가";

            if(id) {
                const item = schedules.find(s => s.id === id);
                if(item) {
                    document.getElementById('admin-schedule-id').value = item.id;
                    document.getElementById('admin-sched-date').value = item.date || '';
                    document.getElementById('admin-sched-title').value = item.title || '';
                    document.getElementById('admin-sched-book').value = item.book || '';
                    document.getElementById('admin-sched-location').value = item.location || '';
                    document.getElementById('admin-sched-time').value = item.time || '';
                    document.getElementById('admin-form-title').innerText = "일정 수정";
                }
            }
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
        function closeScheduleForm() {
            document.getElementById('admin-schedule-modal').classList.add('hidden');
            document.getElementById('admin-schedule-modal').classList.remove('flex');
        }
        async function saveSchedule(e) {
            e.preventDefault();
            if(!window.db) return alert("Firebase DB가 설정되지 않았습니다.");
            
            const id = document.getElementById('admin-schedule-id').value;
            const data = {
                date: document.getElementById('admin-sched-date').value,
                title: document.getElementById('admin-sched-title').value,
                book: document.getElementById('admin-sched-book').value,
                location: document.getElementById('admin-sched-location').value,
                time: document.getElementById('admin-sched-time').value,
                status: "Upcoming"
            };

            try {
                if(id) {
                    await window.db.collection('schedules').doc(id).update(data);
                } else {
                    await window.db.collection('schedules').add(data);
                }
                closeScheduleForm();
            } catch(err) {
                alert("저장 실패: " + err.message);
            }
        }
        function editSchedule(id) {
            openScheduleForm(id);
        }
        async function deleteSchedule(id) {
            if(!confirm("이 일정을 정말 삭제하시겠습니까?")) return;
            if(!window.db) return;
            try {
                await window.db.collection('schedules').doc(id).delete();
            } catch(err) {
                alert("삭제 실패: " + err.message);
            }
        }

        // --- Library / Our Memories 관리자 기능 ---
        function escapeHtml(value = '') {
            return String(value).replace(/[&<>'"]/g, char => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
            }[char]));
        }

        function requireAdmin() {
            if (window.isAdmin) return true;
            alert('관리자 로그인 후 이용할 수 있습니다.');
            return false;
        }

        function setFormStatus(id, message, isError = false) {
            const element = document.getElementById(id);
            element.textContent = message;
            element.classList.remove('hidden', 'text-red-500', 'text-[#8D6E63]');
            element.classList.add(isError ? 'text-red-500' : 'text-[#8D6E63]');
        }

        function clearFormStatus(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function toggleModal(id, show) {
            const modal = document.getElementById(id);
            modal.classList.toggle('hidden', !show);
            modal.classList.toggle('flex', show);
            document.body.style.overflow = show ? 'hidden' : 'auto';
        }

        // Dashboard 멤버 수 관리
        window.openMemberCountForm = function () {
            if (!requireAdmin()) return;
            document.getElementById('member-count-input').value = dashboardSettings.memberCount;
            clearFormStatus('member-count-status');
            toggleModal('member-count-modal', true);
        };

        window.closeMemberCountForm = function () {
            toggleModal('member-count-modal', false);
        };

        window.saveMemberCount = async function (event) {
            event.preventDefault();
            if (!requireAdmin() || !window.db) return;

            const memberCount = Number(document.getElementById('member-count-input').value);
            if (!Number.isInteger(memberCount) || memberCount < 0) {
                setFormStatus('member-count-status', '0 이상의 정수로 입력해 주세요.', true);
                return;
            }

            const saveButton = document.getElementById('member-count-save-button');
            saveButton.disabled = true;
            saveButton.textContent = '저장 중...';
            clearFormStatus('member-count-status');

            try {
                await window.db.collection('settings').doc('dashboard').set({
                    memberCount,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                closeMemberCountForm();
            } catch (error) {
                console.error('멤버 수 저장 실패:', error);
                setFormStatus('member-count-status', `저장하지 못했습니다: ${error.message}`, true);
            } finally {
                saveButton.disabled = false;
                saveButton.textContent = '저장';
            }
        };

        // Collected Sentences 관리
        window.openQuotesManager = function (id = null) {
            if (!requireAdmin()) return;
            toggleModal('quotes-manager-modal', true);
            renderQuotesManager();
            if (id) editQuote(id); else resetQuoteForm();
        };

        window.closeQuotesManager = function () {
            toggleModal('quotes-manager-modal', false);
        };

        window.renderQuotesManager = function () {
            const container = document.getElementById('quotes-manager-list');
            const newestFirst = quotesData.slice().sort(compareQuotesNewestFirst);
            container.innerHTML = newestFirst.length ? newestFirst.map(quote => `
                <div class="flex items-start gap-3 bg-white border border-[#8D6E63]/15 rounded-lg p-3">
                    <div class="min-w-0 flex-1">
                        <p class="text-sm text-[#3E2723] leading-relaxed line-clamp-2">${escapeHtml(quote.text)}</p>
                        <p class="text-[11px] text-gray-500 mt-1">${escapeHtml(quote.book)}</p>
                    </div>
                    ${quote.id ? `
                    <div class="flex flex-col gap-1 shrink-0">
                        <button onclick="editQuote('${quote.id}')" class="text-[11px] text-[#5D4037] hover:underline">수정</button>
                        <button onclick="deleteQuote('${quote.id}')" class="text-[11px] text-red-500 hover:underline">삭제</button>
                    </div>` : '<span class="text-[10px] text-gray-400 shrink-0">가져오기 필요</span>'}
                </div>`).join('') : '<p class="text-sm text-gray-400 text-center py-8">등록된 문장이 없습니다.</p>';
        };

        window.resetQuoteForm = function () {
            document.getElementById('quote-form').reset();
            document.getElementById('quote-id').value = '';
            document.getElementById('quote-form-title').textContent = '새 문장 추가';
            document.getElementById('quote-save-button').textContent = '문장 저장';
            clearFormStatus('quote-form-status');
        };

        window.editQuote = function (id) {
            const quote = quotesData.find(item => item.id === id);
            if (!quote) return;
            document.getElementById('quote-id').value = id;
            document.getElementById('quote-text').value = quote.text || '';
            document.getElementById('quote-book').value = quote.book || '';
            document.getElementById('quote-form-title').textContent = '문장 수정';
            document.getElementById('quote-save-button').textContent = '변경사항 저장';
            clearFormStatus('quote-form-status');
        };

        window.saveQuote = async function (event) {
            event.preventDefault();
            if (!requireAdmin() || !window.db) return;

            const id = document.getElementById('quote-id').value;
            if (!id && quotesData.some(quote => !quote.id)) {
                const remoteQuotes = await window.db.collection('quotes').limit(1).get();
                if (remoteQuotes.empty) {
                    alert('처음에는 “기존 문장 가져오기”를 눌러 현재 문장을 Firebase에 옮겨주세요. 기존 문장이 사라지는 일을 막기 위한 안내입니다.');
                    return;
                }
            }

            const button = document.getElementById('quote-save-button');
            button.disabled = true;
            button.classList.add('opacity-60');
            setFormStatus('quote-form-status', '문장을 저장하는 중입니다...');
            try {
                const data = {
                    text: document.getElementById('quote-text').value.trim(),
                    book: document.getElementById('quote-book').value.trim(),
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                if (id) {
                    await window.db.collection('quotes').doc(id).update(data);
                } else {
                    data.sortOrder = Date.now();
                    data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
                    await window.db.collection('quotes').add(data);
                }
                resetQuoteForm();
            } catch (error) {
                console.error('문장 저장 실패:', error);
                setFormStatus('quote-form-status', `저장 실패: ${error.message}`, true);
            } finally {
                button.disabled = false;
                button.classList.remove('opacity-60');
            }
        };

        window.deleteQuote = async function (id) {
            if (!requireAdmin() || !confirm('이 문장을 삭제하시겠습니까?')) return;
            try {
                await window.db.collection('quotes').doc(id).delete();
                resetQuoteForm();
            } catch (error) {
                alert(`삭제 실패: ${error.message}`);
            }
        };

        window.seedQuotesFromPage = async function () {
            if (!requireAdmin() || !window.db) return;
            if (!confirm('현재 페이지에 들어 있는 문장을 Firebase에 한 번 가져올까요? 기존 Firebase 문장이 있으면 실행되지 않습니다.')) return;
            try {
                const existing = await window.db.collection('quotes').limit(1).get();
                if (!existing.empty) return alert('이미 Firebase에 등록된 문장이 있습니다. 중복을 막기 위해 가져오지 않았습니다.');
                const batch = window.db.batch();
                quotesData.forEach((quote, index) => {
                    batch.set(window.db.collection('quotes').doc(), {
                        text: quote.text,
                        book: quote.book,
                        sortOrder: Number(quote.sortOrder) || quotesData.length - index,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                });
                await batch.commit();
                alert(`${quotesData.length}개의 문장을 가져왔습니다.`);
            } catch (error) {
                alert(`가져오기 실패: ${error.message}`);
            }
        };

        // 공개 GitHub 저장소의 정적 파일을 읽어 관리자 선택창에 표시합니다.
        // 쓰기 권한이나 토큰은 사용하지 않으므로, 파일 추가는 기존처럼 GitHub에서 합니다.
        const githubAssetCache = new Map();

        function githubAssetApiUrl(directory) {
            const github = window.SITE_CONFIG?.github;
            if (!github?.owner || !github?.repository) return null;
            const encodedDirectory = directory.split('/').map(encodeURIComponent).join('/');
            return `https://api.github.com/repos/${encodeURIComponent(github.owner)}/${encodeURIComponent(github.repository)}/contents/${encodedDirectory}`;
        }

        async function getGitHubAssets(directory, forceRefresh = false) {
            if (!forceRefresh && githubAssetCache.has(directory)) return githubAssetCache.get(directory);
            const url = githubAssetApiUrl(directory);
            if (!url) throw new Error('GitHub 저장소 설정을 찾지 못했습니다.');
            const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'GitHub 파일 목록을 불러오지 못했습니다.');
            const files = data
                .filter(item => item.type === 'file')
                .map(item => item.path)
                .sort((a, b) => a.localeCompare(b, 'ko'));
            githubAssetCache.set(directory, files);
            return files;
        }

        function populateAssetSelect(selectId, files, placeholder, currentValue, allowedFile) {
            const select = document.getElementById(selectId);
            const filteredFiles = files.filter(allowedFile);
            select.replaceChildren(new Option(placeholder, ''));
            filteredFiles.forEach(path => select.add(new Option(path.split('/').pop(), path)));
            select.disabled = false;
            if (filteredFiles.includes(currentValue)) select.value = currentValue;
        }

        function showAssetLoadError(selectId, message) {
            const select = document.getElementById(selectId);
            select.replaceChildren(new Option(message, ''));
            select.disabled = true;
        }

        function updateAssetSelection(selectId, value) {
            const select = document.getElementById(selectId);
            if ([...select.options].some(option => option.value === value)) select.value = value;
            else select.value = '';
        }

        // 기존에 한 번에 가져온 도서는 1~N 순번을 역순으로 보관합니다.
        // 이후 관리 화면에서 새로 만든 도서는 현재 시각 기반의 큰 순번을 갖습니다.
        // 두 경우 모두 가장 최근 도서가 먼저 보이도록 한 곳에서 정렬합니다.
        function compareBooksNewestFirst(a, b) {
            const aOrder = Number(a.sortOrder) || 0;
            const bOrder = Number(b.sortOrder) || 0;
            const aIsMigrated = aOrder > 0 && aOrder < 1000000;
            const bIsMigrated = bOrder > 0 && bOrder < 1000000;

            if (aIsMigrated && bIsMigrated) return aOrder - bOrder;
            if (aIsMigrated) return 1;
            if (bIsMigrated) return -1;
            return bOrder - aOrder;
        }

        window.chooseGitHubAsset = function (inputId, path) {
            if (path) document.getElementById(inputId).value = path;
        };

        window.refreshBookAssetChoices = async function (forceRefresh = false) {
            const loading = new Option('GitHub 파일 목록을 불러오는 중…', '');
            ['book-image-select', 'book-material-select', 'book-summary-select'].forEach(id => {
                const select = document.getElementById(id);
                select.replaceChildren(loading.cloneNode(true));
                select.disabled = true;
            });
            try {
                const [images, materials] = await Promise.all([
                    getGitHubAssets('images_book', forceRefresh),
                    getGitHubAssets('discussion materials', forceRefresh)
                ]);
                populateAssetSelect('book-image-select', images, '표지 이미지 선택', document.getElementById('book-image-url').value, path => /\.(avif|gif|jpe?g|png|webp)$/i.test(path));
                populateAssetSelect('book-material-select', materials, '발제문 선택', document.getElementById('book-material-url').value, path => /\.pdf$/i.test(path));
                populateAssetSelect('book-summary-select', materials, '요약본 선택', document.getElementById('book-summary-url').value, path => /\.pdf$/i.test(path));
            } catch (error) {
                console.warn('GitHub 파일 목록을 불러오지 못했습니다:', error);
                ['book-image-select', 'book-material-select', 'book-summary-select'].forEach(id => showAssetLoadError(id, '목록을 불러오지 못했습니다 — 경로 직접 입력'));
            }
        };

        window.refreshGalleryAssetChoices = async function (forceRefresh = false) {
            const select = document.getElementById('gallery-image-select');
            select.replaceChildren(new Option('GitHub 파일 목록을 불러오는 중…', ''));
            select.disabled = true;
            try {
                const images = await getGitHubAssets('our_moments', forceRefresh);
                populateAssetSelect('gallery-image-select', images, '갤러리 사진 선택', document.getElementById('gallery-image-url').value, path => /\.(avif|gif|jpe?g|png|webp)$/i.test(path));
            } catch (error) {
                console.warn('GitHub 파일 목록을 불러오지 못했습니다:', error);
                showAssetLoadError('gallery-image-select', '목록을 불러오지 못했습니다 — 경로 직접 입력');
            }
        };

        // Library 관리
        window.openBooksManager = function (id = null) {
            if (!requireAdmin()) return;
            toggleModal('books-manager-modal', true);
            renderBookManager();
            if (id) editBook(id); else resetBookForm();
            refreshBookAssetChoices();
        };

        window.closeBooksManager = function () {
            toggleModal('books-manager-modal', false);
        };

        window.renderBookManager = function () {
            const query = (document.getElementById('book-manager-search').value || '').trim().toLowerCase();
            const matches = books
                .filter(book => !query || `${book.title} ${book.author}`.toLowerCase().includes(query))
                .slice()
                .sort(compareBooksNewestFirst);
            const container = document.getElementById('book-manager-list');
            container.innerHTML = matches.length ? matches.map(book => `
                <div class="flex items-center gap-3 bg-white border border-[#8D6E63]/15 rounded-lg p-3">
                    <img src="${escapeHtml(book.image || '')}" class="w-9 h-12 object-cover rounded bg-gray-100" alt="">
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-bold text-[#3E2723] truncate">${escapeHtml(book.title)}</p>
                        <p class="text-[11px] text-gray-500 truncate">${escapeHtml(book.author)} · ${escapeHtml(book.genre)}</p>
                    </div>
                    ${book.id ? `
                    <div class="flex flex-col gap-1 shrink-0">
                        <button onclick="editBook('${book.id}')" class="text-[11px] text-[#5D4037] hover:underline">수정</button>
                        <button onclick="deleteBook('${book.id}')" class="text-[11px] text-red-500 hover:underline">삭제</button>
                    </div>` : '<span class="text-[10px] text-gray-400 shrink-0">가져오기 필요</span>'}
                </div>`).join('') : '<p class="text-sm text-gray-400 text-center py-8">일치하는 도서가 없습니다.</p>';
        };

        window.resetBookForm = function () {
            document.getElementById('book-form').reset();
            document.getElementById('book-id').value = '';
            document.getElementById('book-sort-order').value = Date.now();
            document.getElementById('book-form-title').textContent = '새 도서 추가';
            document.getElementById('book-save-button').textContent = '도서 저장';
            clearFormStatus('book-form-status');
            ['book-image-select', 'book-material-select', 'book-summary-select'].forEach(id => updateAssetSelection(id, ''));
        };

        window.editBook = function (id) {
            const book = books.find(item => item.id === id);
            if (!book) return;
            document.getElementById('book-form').reset();
            document.getElementById('book-id').value = id;
            document.getElementById('book-title').value = book.title || '';
            document.getElementById('book-author').value = book.author || '';
            document.getElementById('book-genre').value = book.genre || '';
            document.getElementById('book-sort-order').value = Number.isFinite(book.sortOrder) ? book.sortOrder : 0;
            document.getElementById('book-author-info').value = book.authorInfo || '';
            document.getElementById('book-summary').value = book.fullSummary || book.summary || '';
            document.getElementById('book-topic').value = book.topic || '';
            document.getElementById('book-questions').value = (book.questions || []).join('\n');
            document.getElementById('book-image-url').value = book.image || '';
            document.getElementById('book-material-url').value = book.materialUrl || '';
            document.getElementById('book-summary-url').value = book.summaryUrl || '';
            document.getElementById('book-form-title').textContent = '도서 수정';
            document.getElementById('book-save-button').textContent = '변경사항 저장';
            clearFormStatus('book-form-status');
            updateAssetSelection('book-image-select', book.image || '');
            updateAssetSelection('book-material-select', book.materialUrl || '');
            updateAssetSelection('book-summary-select', book.summaryUrl || '');
        };

        window.saveBook = async function (event) {
            event.preventDefault();
            if (!requireAdmin() || !window.db) return;
            const id = document.getElementById('book-id').value;
            if (!id && books.some(book => !book.id)) {
                const remoteBooks = await window.db.collection('books').limit(1).get();
                if (remoteBooks.empty) {
                    alert('처음에는 “기존 도서 가져오기”를 눌러 현재 Library를 Firebase에 옮겨주세요. 기존 도서가 사라지는 일을 막기 위한 안내입니다.');
                    return;
                }
            }
            const existing = books.find(book => book.id === id) || {};
            const button = document.getElementById('book-save-button');
            button.disabled = true;
            button.classList.add('opacity-60');
            setFormStatus('book-form-status', '도서 정보를 저장하는 중입니다...');
            try {
                let image = document.getElementById('book-image-url').value.trim() || existing.image || '';
                let materialUrl = document.getElementById('book-material-url').value.trim() || existing.materialUrl || '';
                let summaryUrl = document.getElementById('book-summary-url').value.trim() || existing.summaryUrl || '';
                if (!image) throw new Error('도서 표지 이미지 URL 또는 경로를 입력해주세요.');
                const data = {
                    title: document.getElementById('book-title').value.trim(),
                    author: document.getElementById('book-author').value.trim(),
                    genre: document.getElementById('book-genre').value.trim(),
                    sortOrder: Number(document.getElementById('book-sort-order').value) || 0,
                    authorInfo: document.getElementById('book-author-info').value.trim(),
                    fullSummary: document.getElementById('book-summary').value.trim(),
                    topic: document.getElementById('book-topic').value.trim(),
                    questions: document.getElementById('book-questions').value.split('\n').map(item => item.trim()).filter(Boolean),
                    image, materialUrl, summaryUrl,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                if (id) await window.db.collection('books').doc(id).update(data);
                else {
                    data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
                    await window.db.collection('books').add(data);
                }
                resetBookForm();
            } catch (error) {
                console.error(error);
                setFormStatus('book-form-status', `저장 실패: ${error.message}`, true);
            } finally {
                button.disabled = false;
                button.classList.remove('opacity-60');
            }
        };

        window.deleteBook = async function (id) {
            if (!requireAdmin() || !confirm('이 도서를 삭제하시겠습니까?')) return;
            try {
                await window.db.collection('books').doc(id).delete();
                resetBookForm();
            } catch (error) {
                alert(`삭제 실패: ${error.message}`);
            }
        };

        window.seedBooksFromPage = async function () {
            if (!requireAdmin() || !window.db) return;
            if (!confirm('현재 페이지에 들어 있는 도서 목록을 Firebase에 한 번 가져올까요? 기존 Firebase 도서가 있으면 실행되지 않습니다.')) return;
            try {
                const existing = await window.db.collection('books').limit(1).get();
                if (!existing.empty) return alert('이미 Firebase에 등록된 도서가 있습니다. 중복을 막기 위해 가져오지 않았습니다.');
                const batch = window.db.batch();
                books.forEach((book, index) => {
                    const { id, ...data } = book;
                    batch.set(window.db.collection('books').doc(), { ...data, sortOrder: books.length - index, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
                });
                await batch.commit();
                alert(`${books.length}권을 가져왔습니다.`);
            } catch (error) {
                alert(`가져오기 실패: ${error.message}`);
            }
        };

        async function fetchBooksFromFirebase() {
            if (!window.db) return;
            return new Promise(resolve => {
                window.db.collection('books').onSnapshot(snapshot => {
                    if (!snapshot.empty) {
                        books = snapshot.docs
                            .map(doc => ({ id: doc.id, ...doc.data() }))
                            .sort(compareBooksNewestFirst);
                        renderBooks('All');
                        renderDashboard();
                        if (!document.getElementById('books-manager-modal').classList.contains('hidden')) renderBookManager();
                    }
                    resolve();
                }, error => { console.error('도서 불러오기 실패:', error); resolve(); });
            });
        }

        // Our Memories 관리
        window.openGalleryManager = function (id = null) {
            if (!requireAdmin()) return;
            toggleModal('gallery-manager-modal', true);
            renderGalleryManager();
            if (id) editGalleryPhoto(id); else resetGalleryForm();
            refreshGalleryAssetChoices();
        };

        window.closeGalleryManager = function () {
            toggleModal('gallery-manager-modal', false);
        };

        window.renderGalleryManager = function () {
            const container = document.getElementById('gallery-manager-list');
            container.innerHTML = galleryPhotos.length ? galleryPhotos.map(photo => {
                const imageUrl = photo.imageUrl || photo.src || '';
                return `<div class="flex items-center gap-3 bg-white border border-[#8D6E63]/15 rounded-lg p-3">
                    <img src="${escapeHtml(imageUrl)}" class="w-12 h-12 object-cover rounded bg-gray-100" alt="">
                    <div class="min-w-0 flex-1"><p class="text-sm font-bold text-[#3E2723] truncate">${escapeHtml(photo.title)}</p><p class="text-[11px] text-gray-500">순서 ${photo.sortOrder ?? '-'}</p></div>
                    ${photo.id ? `<div class="flex flex-col gap-1 shrink-0"><button onclick="editGalleryPhoto('${photo.id}')" class="text-[11px] text-[#5D4037] hover:underline">수정</button><button onclick="deleteGalleryPhoto('${photo.id}')" class="text-[11px] text-red-500 hover:underline">삭제</button></div>` : '<span class="text-[10px] text-gray-400 shrink-0">가져오기 필요</span>'}
                </div>`;
            }).join('') : '<p class="text-sm text-gray-400 text-center py-8">등록된 사진이 없습니다.</p>';
        };

        window.resetGalleryForm = function () {
            document.getElementById('gallery-form').reset();
            document.getElementById('gallery-id').value = '';
            // 기존 사진의 가장 큰 순번 다음 값을 제안합니다.
            // 아직 Firebase로 가져오기 전에는 사진 수를 기준으로 계산합니다.
            const registeredOrders = galleryPhotos
                .map(photo => Number(photo.sortOrder))
                .filter(Number.isFinite);
            const nextSortOrder = registeredOrders.length
                ? Math.max(...registeredOrders) + 1
                : galleryPhotos.length + 1;
            document.getElementById('gallery-sort-order').value = nextSortOrder;
            document.getElementById('gallery-form-title').textContent = '새 사진 추가';
            document.getElementById('gallery-save-button').textContent = '사진 저장';
            clearFormStatus('gallery-form-status');
            updateAssetSelection('gallery-image-select', '');
        };

        window.editGalleryPhoto = function (id) {
            const photo = galleryPhotos.find(item => item.id === id);
            if (!photo) return;
            document.getElementById('gallery-form').reset();
            document.getElementById('gallery-id').value = id;
            document.getElementById('gallery-title').value = photo.title || '';
            document.getElementById('gallery-image-url').value = photo.imageUrl || photo.src || '';
            document.getElementById('gallery-sort-order').value = Number.isFinite(photo.sortOrder) ? photo.sortOrder : 0;
            document.getElementById('gallery-form-title').textContent = '사진 수정';
            document.getElementById('gallery-save-button').textContent = '변경사항 저장';
            clearFormStatus('gallery-form-status');
            updateAssetSelection('gallery-image-select', photo.imageUrl || photo.src || '');
        };

        window.saveGalleryPhoto = async function (event) {
            event.preventDefault();
            if (!requireAdmin() || !window.db) return;
            const id = document.getElementById('gallery-id').value;
            if (!id && galleryPhotos.some(photo => !photo.id)) {
                const remotePhotos = await window.db.collection('galleryPhotos').limit(1).get();
                if (remotePhotos.empty) {
                    alert('처음에는 “기존 사진 가져오기”를 눌러 현재 갤러리를 Firebase에 옮겨주세요. 기존 사진이 사라지는 일을 막기 위한 안내입니다.');
                    return;
                }
            }
            const existing = galleryPhotos.find(photo => photo.id === id) || {};
            const button = document.getElementById('gallery-save-button');
            button.disabled = true; button.classList.add('opacity-60');
            setFormStatus('gallery-form-status', '사진 정보를 저장하는 중입니다...');
            try {
                let imageUrl = document.getElementById('gallery-image-url').value.trim() || existing.imageUrl || existing.src || '';
                if (!imageUrl) throw new Error('사진 URL 또는 경로를 입력해주세요.');
                const data = {
                    title: document.getElementById('gallery-title').value.trim(), imageUrl,
                    sortOrder: Number(document.getElementById('gallery-sort-order').value) || 0,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                };
                if (id) await window.db.collection('galleryPhotos').doc(id).update(data);
                else {
                    data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
                    await window.db.collection('galleryPhotos').add(data);
                }
                resetGalleryForm();
            } catch (error) {
                console.error(error);
                setFormStatus('gallery-form-status', `저장 실패: ${error.message}`, true);
            } finally {
                button.disabled = false; button.classList.remove('opacity-60');
            }
        };

        window.deleteGalleryPhoto = async function (id) {
            if (!requireAdmin() || !confirm('이 사진을 삭제하시겠습니까?')) return;
            try {
                await window.db.collection('galleryPhotos').doc(id).delete();
                resetGalleryForm();
            } catch (error) {
                alert(`삭제 실패: ${error.message}`);
            }
        };

        window.seedGalleryFromPage = async function () {
            if (!requireAdmin() || !window.db) return;
            if (!confirm('현재 페이지에 들어 있는 사진 목록을 Firebase에 한 번 가져올까요? 기존 Firebase 사진이 있으면 실행되지 않습니다.')) return;
            try {
                const existing = await window.db.collection('galleryPhotos').limit(1).get();
                if (!existing.empty) return alert('이미 Firebase에 등록된 사진이 있습니다. 중복을 막기 위해 가져오지 않았습니다.');
                const batch = window.db.batch();
                galleryPhotos.forEach((photo, index) => {
                    batch.set(window.db.collection('galleryPhotos').doc(), {
                        title: photo.title, imageUrl: photo.imageUrl || photo.src, sortOrder: galleryPhotos.length - index,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                });
                await batch.commit();
                alert(`${galleryPhotos.length}장의 사진을 가져왔습니다.`);
            } catch (error) {
                alert(`가져오기 실패: ${error.message}`);
            }
        };

        async function fetchGalleryFromFirebase() {
            if (!window.db) return;
            return new Promise(resolve => {
                window.db.collection('galleryPhotos').orderBy('sortOrder', 'desc').onSnapshot(snapshot => {
                    if (!snapshot.empty) {
                        galleryPhotos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        renderGallery();
                        if (!document.getElementById('gallery-manager-modal').classList.contains('hidden')) renderGalleryManager();
                    }
                    resolve();
                }, error => { console.error('갤러리 불러오기 실패:', error); resolve(); });
            });
        }

        async function fetchQuotesFromFirebase() {
            if (!window.db) return;
            return new Promise(resolve => {
                window.db.collection('quotes').onSnapshot(snapshot => {
                    if (!snapshot.empty) {
                        quotesData = snapshot.docs
                            .map(doc => ({ id: doc.id, ...doc.data() }))
                            .sort(compareQuotesNewestFirst);
                        renderQuotes();
                        if (!document.getElementById('quotes-manager-modal').classList.contains('hidden')) renderQuotesManager();
                    }
                    resolve();
                }, error => {
                    console.error('문장 불러오기 실패:', error);
                    resolve();
                });
            });
        }

        async function fetchDashboardSettings() {
            if (!window.db) return;
            return new Promise(resolve => {
                window.db.collection('settings').doc('dashboard').onSnapshot(document => {
                    const memberCount = Number(document.data()?.memberCount);
                    if (document.exists && Number.isInteger(memberCount) && memberCount >= 0) {
                        dashboardSettings.memberCount = memberCount;
                    }
                    renderDashboard();
                    resolve();
                }, error => {
                    console.error('Dashboard 설정 불러오기 실패:', error);
                    resolve();
                });
            });
        }

        // Initialize
        window.onload = async function () {
            // Firebase 로그인 저장 방식(브라우저 세션 전용)이 적용된 뒤 인증 상태를 읽습니다.
            if (window.authPersistenceReady) {
                try {
                    await window.authPersistenceReady;
                } catch (error) {
                    console.error('로그인 세션을 초기화하지 못했습니다:', error);
                }
            }

            // 인증 상태 리스너 등록
            if(window.auth) {
                window.auth.onAuthStateChanged(user => {
                    window.isAdmin = !!user;
                    const loginBtn = document.getElementById('nav-login-btn');
                    const logoutBtn = document.getElementById('nav-logout-btn');
                    const booksAdminButton = document.getElementById('books-admin-button');
                    const galleryAdminButton = document.getElementById('gallery-admin-button');
                    const dashboardAdminButton = document.getElementById('dashboard-admin-button');
                    const scheduleAdminButton = document.getElementById('schedule-admin-button');
                    const quotesAdminButton = document.getElementById('quotes-admin-button');

                    if(user) {
                        loginBtn.classList.add('hidden');
                        loginBtn.classList.remove('block', 'md:inline');
                        
                        logoutBtn.classList.remove('hidden');
                        logoutBtn.classList.add('block', 'md:inline');
                    } else {
                        loginBtn.classList.remove('hidden');
                        loginBtn.classList.add('block', 'md:inline');
                        
                        logoutBtn.classList.add('hidden');
                        logoutBtn.classList.remove('block', 'md:inline');
                    }
                    booksAdminButton.classList.toggle('hidden', !user);
                    galleryAdminButton.classList.toggle('hidden', !user);
                    dashboardAdminButton.classList.toggle('hidden', !user);
                    scheduleAdminButton.classList.toggle('hidden', !user);
                    quotesAdminButton.classList.toggle('hidden', !user);
                    // 권한 변경 시 관리자 도구를 포함해 다시 그립니다.
                    renderAccordionSchedules();
                    renderBooks('All');
                    renderGallery();
                });
            }

            await Promise.all([
                fetchSchedulesFromFirebase(),
                fetchBooksFromFirebase(),
                fetchGalleryFromFirebase(),
                fetchQuotesFromFirebase(),
                fetchDashboardSettings()
            ]);

            initScrollAnimations();
            renderQuotes();
            initDragToScroll();
            renderAccordionSchedules();
            renderBooks('All');
            renderDashboard();
            renderGallery();
            initCustomScrollbar();
        };
