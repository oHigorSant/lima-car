/* global React, ReactDOM, Icon, Stars, Placeholder, LogoBlock */
const {
  useState: useState2
} = React;

/* ============ FORM ============ */
const ContactForm = () => {
  const [data, setData] = useState2({
    nome: "",
    telefone: "",
    servico: "",
    urgencia: ""
  });
  const [sent, setSent] = useState2(false);
  const fmtPhone = v => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };
  const submit = e => {
    e.preventDefault();
    if (!data.nome || !data.telefone || !data.servico || !data.urgencia) return;
    setSent(true);
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      className: "form-card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-success"
    }, /*#__PURE__*/React.createElement("div", {
      className: "check-big"
    }, /*#__PURE__*/React.createElement(Icon.Check, {
      size: 28
    })), /*#__PURE__*/React.createElement("h4", null, "Pedido recebido"), /*#__PURE__*/React.createElement("p", null, "Obrigado, ", data.nome.split(" ")[0], ". Nossa equipe entra em contato pelo WhatsApp em at\xE9 30 minutos durante o hor\xE1rio comercial."), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/5527997403287",
      className: "btn btn-primary",
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Icon.WhatsApp, {
      size: 18
    }), "Continuar no WhatsApp")));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "form-card",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("h3", {style:{fontSize:'clamp(24px,2vw,30px)'}}, "Solicitar Or\xE7amento"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style:{fontSize:16,marginBottom:28}
  }, "Resposta em at\xE9 30 minutos no hor\xE1rio comercial."), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nome completo"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Como prefere ser chamado",
    value: data.nome,
    onChange: e => setData({
      ...data,
      nome: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Telefone / WhatsApp"), /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "(27) 9 9999-9999",
    value: data.telefone,
    onChange: e => setData({
      ...data,
      telefone: fmtPhone(e.target.value)
    }),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Servi\xE7o desejado"), /*#__PURE__*/React.createElement("select", {
    value: data.servico,
    onChange: e => setData({
      ...data,
      servico: e.target.value
    }),
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Selecione um servi\xE7o"), /*#__PURE__*/React.createElement("option", null, "Revis\xE3o Preventiva"), /*#__PURE__*/React.createElement("option", null, "Freios e Suspens\xE3o"), /*#__PURE__*/React.createElement("option", null, "Troca de \xD3leo e Filtros"), /*#__PURE__*/React.createElement("option", null, "Mec\xE2nica Geral / Diagn\xF3stico"), /*#__PURE__*/React.createElement("option", null, "Outro / N\xE3o sei identificar"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "N\xEDvel de urg\xEAncia"), /*#__PURE__*/React.createElement("div", {
    className: "urgency-grid"
  }, ["Posso esperar", "Esta semana", "Urgente"].map(u => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: u,
    className: "urgency-btn " + (data.urgencia === u ? "active" : ""),
    onClick: () => setData({
      ...data,
      urgencia: u
    })
  }, u)))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block",
    style: {
      marginTop: 8
    }
  }, "Fazer Or\xE7amento ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "arrow"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontSize: 12,
      color: 'var(--silver-dim)',
      fontFamily: 'JetBrains Mono, monospace',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Sem compromisso \xB7 Resposta r\xE1pida"));
};

/* ============ FORM SECTION ============ */
const FormSection = () => /*#__PURE__*/React.createElement("section", {
  className: "form-section",
  id: "contato",
  "data-screen-label": "04 Contato"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "form-wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "form-side"
}, /*#__PURE__*/React.createElement("span", {
  className: "eyebrow eyebrow-line"
}, "Fale com a oficina"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14
  }
}, "Solicite seu", /*#__PURE__*/React.createElement("br", null), "or\xE7amento ", /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "sem compromisso.")), /*#__PURE__*/React.createElement("p", {
  className: "lead"
}, "Fale diretamente com nossa equipe pelo WhatsApp ou preencha o formul\xE1rio ao lado. Avaliamos seu caso, damos um diagn\xF3stico claro e voc\xEA decide o que fazer."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 24,
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    fontSize: 16,
    color: 'var(--silver)'
  }
}, /*#__PURE__*/React.createElement(Icon.Clock, {
  size: 18
}), " Seg\u2013Sex \xB7 08h \xE0s 18h"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    fontSize: 16,
    color: 'var(--silver)'
  }
}, /*#__PURE__*/React.createElement(Icon.Pin, {
  size: 18
}), " Fradinhos, Vit\xF3ria \u2013 ES"))), /*#__PURE__*/React.createElement(ContactForm, null))));

/* ============ TESTIMONIALS ============ */
const Testimonials = () => {
  const items = [{
    tag: "Foco em Honestidade",
    quote: "Sempre tive medo de ir ao mecânico e ser enganado, mas a equipe da Lima Car me explicou cada detalhe do problema antes de mexer no carro. Ganharam um cliente fiel!",
    name: "João Paulo",
    meta: "Cliente há 1 ano",
    ini: "JP"
  }, {
    tag: "Foco em Rapidez",
    quote: "Meu carro quebrou um dia antes de viajar com a família. O pessoal me atendeu super rápido, resolveram o problema na suspensão e a viagem foi perfeita.",
    name: "Mariana Costa",
    meta: "Cliente verificado",
    ini: "MC"
  }, {
    tag: "Foco em Preço Justo",
    quote: "Orçamento transparente, sem aquelas 'surpresas' na hora de pagar. Recomendo de olhos fechados.",
    name: "Carlos Eduardo",
    meta: "Cliente verificado",
    ini: "CE"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "testimonials",
    id: "depoimentos",
    "data-screen-label": "05 Depoimentos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-line"
  }, "Quem j\xE1 confia na Lima"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Veja o que dizem", /*#__PURE__*/React.createElement("br", null), "os motoristas ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "como voc\xEA."))), /*#__PURE__*/React.createElement("div", {
    className: "testimonial-grid"
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    className: "testimonial-card",
    key: t.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "testimonial-tag"
  }, t.tag), /*#__PURE__*/React.createElement(Stars, null), /*#__PURE__*/React.createElement("blockquote", null, t.quote), /*#__PURE__*/React.createElement("div", {
    className: "author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "author-avatar"
  }, t.ini), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "author-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "author-meta"
  }, t.meta))))))));
};

/* ============ SERVICES ============ */
const Services = () => {
  const items = [{
    n: "01",
    icon: /*#__PURE__*/React.createElement(Icon.Shield, {
      size: 28
    }),
    t: "Revisão Preventiva",
    d: "Check-up completo dos principais itens de segurança do seu veículo."
  }, {
    n: "02",
    icon: /*#__PURE__*/React.createElement(Icon.Brake, {
      size: 28
    }),
    t: "Freios e Suspensão",
    d: "Troca de pastilhas, discos, amortecedores e alinhamento 3D."
  }, {
    n: "03",
    icon: /*#__PURE__*/React.createElement(Icon.Oil, {
      size: 28
    }),
    t: "Troca de Óleo e Filtros",
    d: "Lubrificação correta para aumentar a vida útil do seu motor."
  }, {
    n: "04",
    icon: /*#__PURE__*/React.createElement(Icon.Gear, {
      size: 28
    }),
    t: "Mecânica Geral",
    d: "Diagnóstico computadorizado, injeção eletrônica e retífica."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "services",
    id: "servicos",
    "data-screen-label": "06 Servi\xE7os"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-line"
  }, "Nossos servi\xE7os"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "O que podemos fazer", /*#__PURE__*/React.createElement("br", null), "pelo seu carro ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "hoje?"))), /*#__PURE__*/React.createElement("div", {
    className: "service-grid"
  }, items.map(s => /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    key: s.n,
    className: "service-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-tag"
  }, "Especialidade"), /*#__PURE__*/React.createElement("div", {
    className: "service-icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "service-content"
  }, /*#__PURE__*/React.createElement("h4", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))), /*#__PURE__*/React.createElement("div", {
    className: "services-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "btn btn-primary"
  }, "Agendar Meu Servi\xE7o Agora ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "arrow"
  })))));
};

/* ============ GUARANTEE ============ */
const Guarantee = () => /*#__PURE__*/React.createElement("section", {
  className: "guarantee"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "guarantee-wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "shield"
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 160 180",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "sg",
  x1: "0",
  x2: "0",
  y1: "0",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0",
  stopColor: "#ff8f2a"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#d96a0a"
}))), /*#__PURE__*/React.createElement("path", {
  d: "M80 6 L150 32 L150 92 C150 134 120 162 80 174 C40 162 10 134 10 92 L10 32 Z",
  fill: "url(#sg)",
  stroke: "#0a0a0a",
  strokeWidth: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M80 14 L142 38 L142 92 C142 130 116 154 80 166 C44 154 18 130 18 92 L18 38 Z",
  fill: "none",
  stroke: "#0a0a0a",
  strokeWidth: "2",
  opacity: "0.25"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "52,92 72,112 110,72",
  fill: "none",
  stroke: "#0a0a0a",
  strokeWidth: "11",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}))), /*#__PURE__*/React.createElement("div", {
  className: "guarantee-content"
}, /*#__PURE__*/React.createElement("span", {
  className: "eyebrow eyebrow-line"
}, "Garantia de verdade"), /*#__PURE__*/React.createElement("h2", {
  style: {
    marginTop: 14
  }
}, "Seu carro em ", /*#__PURE__*/React.createElement("span", {
  className: "accent"
}, "boas m\xE3os,"), /*#__PURE__*/React.createElement("br", null), "com garantia que vale."), /*#__PURE__*/React.createElement("p", null, "Seguran\xE7a n\xE3o se negocia. Por isso oferecemos garantia total em todos os servi\xE7os realizados e utilizamos apenas pe\xE7as de fornecedores homologados e de alta qualidade. Se o problema voltar, n\xF3s resolvemos.")))));

/* ============ FAQ ============ */
const FAQ = () => {
  const items = [{
    q: "Vocês fazem orçamento sem compromisso?",
    a: "Sim. Avaliamos o seu carro e passamos um diagnóstico claro antes de você aprovar qualquer serviço. Nada é feito sem sua autorização."
  }, {
    q: "Quais são as formas de pagamento?",
    a: "Facilitamos para você: aceitamos PIX, cartões de débito e parcelamos no cartão de crédito em até 12 vezes."
  }, {
    q: "Vocês utilizam peças originais ou de segunda linha?",
    a: "Só utilizamos peças originais. Caso seja do intuito do cliente trazer outra peça de sua preferência fazemos, porém não podemos dar a garantia da mesma."
  }, {
    q: "E se eu não puder levar meu veículo pessoalmente?",
    a: "Basta entrar em contato via telefone ou mensagem para avaliarmos a possibilidade de levar seu carro até a oficina."
  }];
  const [open, setOpen] = useState2(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "faq",
    id: "faq",
    "data-screen-label": "07 FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap-narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-line"
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Ainda tem ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "d\xFAvidas?"))), /*#__PURE__*/React.createElement("div", {
    className: "faq-list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "faq-item " + (open === i ? "open" : ""),
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "faq-q-text"
  }, it.q), /*#__PURE__*/React.createElement("span", {
    className: "faq-toggle"
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-a-inner"
  }, it.a))))), /*#__PURE__*/React.createElement("div", {
    className: "faq-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "btn btn-primary"
  }, "Agendar Meu Servi\xE7o Agora ", /*#__PURE__*/React.createElement(Icon.Arrow, {
    className: "arrow"
  })))));
};

/* ============ FOOTER ============ */
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  id: "footer",
  "data-screen-label": "08 Footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "wrap"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogoBlock, null), /*#__PURE__*/React.createElement("p", {
  className: "footer-brand-text"
}, "Centro automotivo em Vit\xF3ria \u2013 ES. Diagn\xF3stico preciso, pe\xE7as homologadas e garantia total em cada servi\xE7o.")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h5", null, "Onde estamos"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon.Pin, null), " R. Jos\xE9 Cassiano dos Santos, 240", /*#__PURE__*/React.createElement("br", null), "Fradinhos, Vit\xF3ria \u2013 ES", /*#__PURE__*/React.createElement("br", null), "29042-268"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h5", null, "Hor\xE1rio"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon.Clock, null), " Seg a Sex: 08h \xE0s 18h"), /*#__PURE__*/React.createElement("li", {
  className: "muted"
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 14,
    display: 'inline-block'
  }
}), "S\xE1bado e Domingo: Fechado"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h5", null, "Contato"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon.WhatsApp, null), " WhatsApp \xB7 (27) 99740-3287"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon.Phone, null), " Telefone \xB7 (27) 99740-3287"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon.Instagram, null), " @limacar_oficial")))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bottom"
}, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Lima Car \xB7 Centro Automotivo"), /*#__PURE__*/React.createElement("div", null, "Vit\xF3ria / ES \xB7 Brasil"))));

/* ============ FLOATING WA ============ */
const FloatingWA = () => /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5527997403287",
  className: "float-wa",
  target: "_blank",
  rel: "noopener noreferrer",
  "aria-label": "WhatsApp"
}, /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  viewBox: "0 0 448 512",
  fill: "white"
}, /*#__PURE__*/React.createElement("path", {
  d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
})));
window.FormSection = FormSection;
window.Testimonials = Testimonials;
window.Services = Services;
window.Guarantee = Guarantee;
window.FAQ = FAQ;
window.Footer = Footer;
window.FloatingWA = FloatingWA;