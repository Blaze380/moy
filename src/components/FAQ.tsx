import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = ({ question, answer, isOpen, onClick }: 
  FAQItem & { isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-800">
    <button
      className="w-full py-6 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="font-medium">{question}</span>
      {isOpen ? (
        <Minus className="w-5 h-5 text-[#490e46]" />
      ) : (
        <Plus className="w-5 h-5 text-[#490e46]" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6 text-gray-600">
        {answer}
      </div>
    )}
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs: FAQItem[] = [
    {
      question: "O que é a MOY Agency?",
      answer: "A MOY é uma agência criativa moçambicana especializada em marketing digital, design, produção de conteúdo, publicidade paga, desenvolvimento web e análise de dados. Atuamos com foco em resultados e excelência criativa — pixel por pixel."
    },
    {
      question: "Que tipo de clientes a MOY atende?",
      answer: "Trabalhamos com empresas, ONGs, instituições e empreendedores de todos os tamanhos que querem crescer com propósito, principalmente em Moçambique e no mercado africano em geral."
    },
    {
      question: "Quais serviços a MOY oferece?",
      answer: "Oferecemos serviços como gestão de redes sociais, produção de conteúdo visual, campanhas de mídia paga (Google, Meta, TikTok), branding, desenvolvimento de websites e consultoria estratégica com base em dados."
    },
    {
      question: "Qual é o diferencial da MOY?",
      answer: "Somos uma equipe jovem, ágil e comprometida com o sucesso dos nossos clientes. Combinamos criatividade, estratégia e análise para entregar soluções de impacto real — sempre com uma visão africana e foco global."
    },
    {
      question: "A MOY trabalha com contratos mensais ou projetos pontuais?",
      answer: "Ambos! Atendemos tanto projetos únicos quanto contratos contínuos, dependendo da necessidade do cliente. Nosso compromisso é adaptar a solução ideal para cada realidade."
    }
  ];
  

  return (
    <section className="container mx-auto px-6 py-20" id='faqs'>
      <div className="text-center mb-16">
      <span className="text-[#490e46] text-sm uppercase tracking-wider bg-white border border-gray-300 inline-block px-4 py-2 rounded-full font-medium">FAQS</span>
        <h2 className="text-3xl mt-4">Nós temos as respostas</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQAccordion
            key={index}
            {...faq}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}