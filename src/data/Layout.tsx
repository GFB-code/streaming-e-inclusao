export default function Layout() {
  return (
    <main className="
    max-w-[900px] 
    m-auto 
    p-[40px] 
    bg-[#f4f6f9]
    text-stone-950">
      <div className="
      bg-linear-to-r from-[#1e3c72] to-[#2a5298] 
      p-[30px]
      border-[6px]
      mb-[30px]
      text-center">
          <h1 className="mb-[10px] text-xl extrabold">Streaming e Inclusão</h1>
          <p className="text-[#d2e1ff] semi-bold">Como a tecnologia assistiva e a representatividade transformam as transmissões ao vivo</p>
      </div>

      <p className="mb-[15px] justify">O ecossistema do streaming de jogos consolidou-se como um dos principais pilares do entretenimento global. Longe de ser apenas um espaço de lazer passivo, as transmissões ao vivo tornaram-se plataformas de socialização e construção de comunidades. No centro dessa evolução, destaca-se um movimento essencial de <strong>inclusão digital</strong>: criadores de conteúdo com deficiência (PCD) estão ressignificando as dinâmicas de gameplay e interação, superando barreiras geográficas e físicas através da inovação tecnológica.</p>

      <h2 className="text-lg 
      text-[#1e3c72] 
      bold
      pl-[10px] 
      mt-[30px] 
      mb-[15px] 
      border-l-[4px] 
      border-[#3498db] ">A Engenharia por Trás do Gameplay Adaptativo</h2>
      <p className="mb-[15px]">A presença ativa de streamers PCD no cenário atual só é possível graças ao avanço das <strong>tecnologias assistivas</strong>. Estas ferramentas traduzem comandos complexos de jogos eletrônicos para formatos compatíveis com as capacidades motoras, visuais ou auditivas de cada indivíduo, permitindo atuações em alto nível:</p>

      <div className="grid grid-rows-2 gap-[20px] my-[20px]">
          <div className="bg-[#e2e8f0] p-[20px] border-[6px] border-[#e2e8f0]">
              <h3 className="mb-[10px] text-[17px] bold">Hardware Modular e Flexível</h3>
              <p className="mb-[15px] justify">Dispositivos como o Xbox Adaptive Controller e o Access Controller da PlayStation funcionam como centrais adaptáveis. Eles permitem conectar botões gigantes, pedais e interruptores externos, distribuindo os comandos tradicionais para as partes do corpo onde o usuário possui maior mobilidade.</p>
          </div>
          <div className="bg-[#e2e8f0] p-[20px] border-[6px] border-[#e2e8f0]">
              <h3 className="mb-[10px] text-[17px] bold">Sistemas de Sopro e Sucção</h3>
              <p className="mb-[15px] justify">O sistema QuadStick é amplamente utilizado por jogadores com tetraplegia. Ele traduz movimentos labiais e a pressão do ar (sopro e sucção) em comandos analógicos e digitais precisos, viabilizando o controle total de jogos complexos sem o uso das mãos.</p>
          </div>
      </div>

      <p className="mb-[15px] justify">Além do hardware, o <strong>rastreamento ocular (Eye Tracking)</strong> avançou a ponto de permitir que comandos rápidos sejam feitos apenas com o movimento dos olhos. No âmbito do software, ferramentas de inteligência artificial que geram legendas automáticas em tempo real e leitores de tela otimizados possibilitam que streamers surdos ou cegos interajam com o chat e gerenciem suas transmissões com total autonomia.</p>

      <h2 className="text-lg 
      text-[#1e3c72] 
      bold
      pl-[10px] 
      mt-[30px] 
      mb-[15px] 
      border-l-[4px] 
      border-[#3498db] ">O Impacto Cultural e o Design Universal</h2>
      <p className="mb-[15px] justify">A atuação desses criadores gera um impacto que ultrapassa o entretenimento individual, impulsionando transformações em toda a indústria:</p>
      
      <ul className="my-[15px] pl-[20px]">
          <li className="mb-[10px]"><strong>Fomento ao Design Universal:</strong> A visibilidade de streamers jogando de formas diversas pressiona estúdios a incluírem, nativamente, opções robustas de acessibilidade nos jogos, como remapeamento completo de botões, modos para daltonismo e pistas visuais para áudio.</li>
          <li className="mb-[10px]"><strong>Desconstrução de Estigmas:</strong> Ao exibirem suas rotinas e habilidades para milhares de espectadores diários, os criadores desmistificam a imagem da pessoa com deficiência, promovendo uma cultura focada na competência e no carisma.</li>
          <li className="mb-[10px]"><strong>Criação de Redes de Apoio:</strong> Canais inclusivos tornam-se portos seguros para espectadores que compartilham das mesmas condições físicas ou neurológicas, oferecendo referências de representatividade.</li>
      </ul>

      <div className="bg-[#eef2f7] border-l-[4px] border-[#2a5298] p-[20px] mt-[30px] mb-[10px] border-6px">
          <p className="m-0 italic"><strong>Perspectiva de Futuro:</strong> A inclusão no streaming demonstra que a acessibilidade não é um recurso secundário, mas sim um elemento fundamental para a democratização do espaço digital. O futuro das transmissões reside na capacidade de acolher a pluralidade humana, garantindo que a tecnologia sirva como uma ponte para o talento, e nunca como uma barreira.</p>
      </div>
    </main>
  )}