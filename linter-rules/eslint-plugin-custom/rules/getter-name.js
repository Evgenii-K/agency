module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Rule getter name",
    },
    messages: {
      nameError:
        "Не правильное название геттера '{{ name }}'. Название должно начинаться с 'get'",
    },
  },
  create: (context) => {
    return {
      Identifier(node) {
        if (node.parent?.type === "Property") {
          const nodeName = node.name;

          const isMatch = /^get/.test(nodeName);

          if (!isMatch) {
            context.report({
              node,
              messageId: "nameError",
              data: {
                name: nodeName,
              },
            });
          }
        }
      },
    };
  },
};
