<h2 id="publicando-aplicação-dotnet-core-com-docker">Publicando aplicação dotnet core com docker</h2>
<h4 id="passo-1---crie-arquivo-dockerfile">Passo 1 - Crie arquivo Dockerfile</h4>
<p><em>Uma pasta antes da raizdo projeto</em></p>
<pre class=" language-sh"><code class="prism  language-sh">FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime

LABEL version="1.0" maintainer="{Nome_Apliacação}"

WORKDIR /app

COPY ./{Nome_Aplicação}/dist .

ENTRYPOINT ["dotnet", "{Nome_Aplicação}.dll"]
</code></pre>
<h4 id="passo-2---gerando-um-imagem-docker">Passo 2 - Gerando um imagem docker</h4>
<p><em>t - Nome da imagem</em><br>
<em>. - Localizar o arquivo dockerfile no path onde está executando o comando</em></p>
<pre class=" language-sh"><code class="prism  language-sh">docker build -t {Nome_Aplicação}:1.1 .
</code></pre>
<h4 id="passo-3---criando-o-container">Passo 3 - Criando o container</h4>
<p><em>p - expor porta do container para o host</em><br>
<em>name - nome do container</em></p>
<pre class=" language-sh"><code class="prism  language-sh">docker run -it -p 123:123 --name {Nome_Container} {Nome_Aplicação}:1.1
</code></pre>

