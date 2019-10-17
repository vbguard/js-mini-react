function createElement(node, attributes, children) {
  function addStyles(element, styles) {
    for (let id in styles) {
      element.style[id] = styles[id];
    }
  }

  node = document.createElement(node);

  if (attributes) {
    if (attributes.style) {
      addStyles(node, attributes.style);
    }

    if (attributes.textContent) {
      node.textContent = attributes.textContent;
    }
  }

  if (children) {
    if (typeof children === 'object') {
      for (let el in children) {
        if (typeof children[el] === 'string') {
          const div = document.createElement('div');
          div.textContent = children[el];
          node.insertAdjacentElement('beforeend', div);
        } else {
          node.insertAdjacentElement('beforeend', children[el]);
        }
      }
    } else {
      node.textContent = children;
    }
  }

  return node;
}

function render(app, rootNode) {
  rootNode.innerHTML = '';
  rootNode.append(app);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
