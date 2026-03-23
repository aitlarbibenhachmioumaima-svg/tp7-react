function JSXDemo() {
  const titreJSX = <h1 className="titre">Salut le JSX</h1>;

  return (
    <div>
      {titreJSX}
      <label htmlFor="champNom">Ton prénom :</label>
      <input id="champNom" placeholder="Ex: Alice" />
    </div>
  );
}