export default function JsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Brand / Organization 实体
      {
        "@type": ["Organization", "Brand"],
        "@id": "https://tea.reicen.com/#organization",
        "name": "饮者留茗",
        "alternateName": "Yin Zhe Liu Ming",
        "url": "https://tea.reicen.com",
        "logo": "https://tea.reicen.com/favicon.ico",
        "image": "https://tea.reicen.com/hero_tea_box.png",
        "description":
          "源自云南传统茶脉与明清制茶世家传承，专注提供高端商务茶礼、古树白茶、滇红及普洱茶的个性化 3D 视觉定制服务。",
        "telephone": "400-110-3366",
        "email": "service@yczbpuer.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "深圳市龙华区新区大道3号翠岭华庭17号",
          "addressLocality": "深圳市",
          "addressRegion": "广东省",
          "addressCountry": "CN",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "400-110-3366",
            "contactType": "customer service",
            "areaServed": "CN",
            "availableLanguage": ["zh-CN", "en"],
          },
        ],
        "sameAs": ["https://tea.reicen.com"],
      },

      // 2. WebSite 实体
      {
        "@type": "WebSite",
        "@id": "https://tea.reicen.com/#website",
        "url": "https://tea.reicen.com",
        "name": "饮者留茗 | 高端商务茶礼定制与云南古树名茶",
        "publisher": {
          "@id": "https://tea.reicen.com/#organization",
        },
        "inLanguage": "zh-CN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tea.reicen.com/selection?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      // 3. 核心定制茶礼整体服务 (Product / AggregateOffer)
      {
        "@type": "Product",
        "@id": "https://tea.reicen.com/#product-custom-service",
        "name": "饮者留茗 - 高端商务茶礼个性化定制服务",
        "description":
          "提供一站式高端茶礼定制解决方案，支持 3D 在线实时预览、激光雕刻企业寄语与Logo（15字以内）、四款经典国潮礼盒（深林飞鸟、盛世华彩、简意归真、集灵瑞气）及高档丝绸烫金包装。",
        "image": [
          "https://tea.reicen.com/hero_tea_box.png",
          "https://tea.reicen.com/product_red_ceramic.png",
          "https://tea.reicen.com/product_white_ceramic.png",
          "https://tea.reicen.com/product_brown_ceramic.png",
        ],
        "category": "商务茶礼定制 / 高端茶叶礼盒",
        "brand": {
          "@id": "https://tea.reicen.com/#organization",
        },
        "offers": {
          "@type": "AggregateOffer",
          "url": "https://tea.reicen.com/customization",
          "priceCurrency": "CNY",
          "lowPrice": "128",
          "highPrice": "358",
          "offerCount": "4",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://tea.reicen.com/#organization",
          },
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "定制方式",
            "value": "3D 在线实时交互预览",
          },
          {
            "@type": "PropertyValue",
            "name": "雕刻工艺",
            "value": "激光高精雕刻，最多支持 15 个汉字",
          },
          {
            "@type": "PropertyValue",
            "name": "包装材质",
            "value": "精美密封陶瓷茶叶罐、高档硬盒、丝绸内衬与烫金工艺",
          },
          {
            "@type": "PropertyValue",
            "name": "起订量",
            "value": "1盒起订，支持企业大批量采购",
          },
        ],
      },

      // 4. 定制商品：滇红
      {
        "@type": "Product",
        "@id": "https://tea.reicen.com/#product-dianhong",
        "name": "饮者留茗 - 云南凤庆古树滇红陶瓷罐装茶礼",
        "image": "https://tea.reicen.com/product_red_ceramic.png",
        "description":
          "精选云南凤庆高山古树滇红，茶汤红艳明亮，花果甜香浓郁，回甘绵长。配备赤红陶瓷密封罐，支持激光雕刻寄语与专属定制。",
        "sku": "YZLM-TH-01",
        "category": "红茶 / 滇红",
        "brand": {
          "@id": "https://tea.reicen.com/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": "https://tea.reicen.com/selection/dianhong",
          "priceCurrency": "CNY",
          "price": "128",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://tea.reicen.com/#organization",
          },
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "原产地", "value": "云南凤庆" },
          { "@type": "PropertyValue", "name": "茶叶等级", "value": "特级高山古树" },
          { "@type": "PropertyValue", "name": "工艺", "value": "传统工夫红茶工艺" },
        ],
      },

      // 5. 定制商品：古树白茶
      {
        "@type": "Product",
        "@id": "https://tea.reicen.com/#product-white-tea",
        "name": "饮者留茗 - 云南景谷古树白茶陶瓷罐装茶礼",
        "image": "https://tea.reicen.com/product_white_ceramic.png",
        "description":
          "精选云南景谷大白茶古树原叶，自然日光萎凋阴干，毫香显著，汤色杏黄清澈，滋味清润甘醇，陈化价值卓越。配备月白陶瓷密封罐。",
        "sku": "YZLM-WT-02",
        "category": "白茶 / 云南古树白茶",
        "brand": {
          "@id": "https://tea.reicen.com/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": "https://tea.reicen.com/selection/white-tea",
          "priceCurrency": "CNY",
          "price": "158",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://tea.reicen.com/#organization",
          },
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "原产地", "value": "云南景谷" },
          { "@type": "PropertyValue", "name": "茶叶等级", "value": "特级古树头春" },
          { "@type": "PropertyValue", "name": "工艺", "value": "自然日光萎凋日光干燥" },
        ],
      },

      // 6. 定制商品：云南普洱
      {
        "@type": "Product",
        "@id": "https://tea.reicen.com/#product-puer",
        "name": "饮者留茗 - 云南勐海古树普洱茶陶瓷罐装茶礼",
        "image": "https://tea.reicen.com/product_brown_ceramic.png",
        "description":
          "采撷云南西双版纳勐海高山古树茶菁，遵循明清翟氏家传古法渥堆发酵与仓储陈化，汤色红浓明亮，陈香纯正，口感醇厚饱满。",
        "sku": "YZLM-PE-03",
        "category": "黑茶 / 普洱熟茶",
        "brand": {
          "@id": "https://tea.reicen.com/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": "https://tea.reicen.com/selection/puer",
          "priceCurrency": "CNY",
          "price": "129",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://tea.reicen.com/#organization",
          },
        },
        "additionalProperty": [
          { "@type": "PropertyValue", "name": "原产地", "value": "云南勐海" },
          { "@type": "PropertyValue", "name": "茶叶等级", "value": "高山乔木古树原料" },
          { "@type": "PropertyValue", "name": "工艺", "value": "明清世家传承渥堆发酵古法" },
        ],
      },

      // 7. FAQPage 实体
      {
        "@type": "FAQPage",
        "@id": "https://tea.reicen.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "茶礼定制的起订量是多少？支持个人定制吗？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "饮者留茗支持单盒起订（1套起订）。无论是个人专属赠礼还是企业大批量采购，我们均提供高标准的个性化 3D 视觉定制服务。针对企业大批量商务采购（50套以上），我们提供专属阶梯优惠、专版设计以及样品寄送服务。",
            },
          },
          {
            "@type": "Question",
            "name": "礼盒激光雕刻与个性化定制有什么字数限制与工艺要求？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "为了保证礼盒雕刻视觉的美观与高端质感，激光雕刻文案限制在 15 个汉字以内（或相应长度英文字符）。您可以在定制页面输入心意寄语、企业名称、姓名或祝福语，并通过 3D 在线预览系统实时查看雕刻效果。",
            },
          },
          {
            "@type": "Question",
            "name": "定制茶礼的打样与交付发货周期需要多久？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "个人或标准定制订单在确认设计与雕刻文案后，通常在 1-3 个工作日内完成精工制作并顺丰发出。企业大宗定制若需实物打样，打样周期一般为 2-3 个工作日；大批量订单交付时间根据订购数量与商务合同约定按期保障交付。",
            },
          },
          {
            "@type": "Question",
            "name": "饮者留茗的茶叶原料产区及品质保障如何？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "饮者留茗所有茶品均来自云南核心名茶原产区，如临沧永德大雪山、凤庆高山古树滇红、景谷大白茶及勐海普洱古茶山。茶园严禁施用化学农药，坚持头春原叶采摘，并严格传承明清制茶世家古法监制，全批次经过严格质量检验，保证品质纯正甘醇。",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaGraph),
      }}
    />
  );
}
