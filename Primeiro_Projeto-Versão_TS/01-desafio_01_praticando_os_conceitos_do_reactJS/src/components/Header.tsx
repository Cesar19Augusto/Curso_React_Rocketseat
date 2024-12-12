import style from '../components/Header.module.css';  // Importa os estilos CSS para o componente Header
import todologo from '../assets/Logo.png';  // Importa a imagem do logotipo do aplicativo
import { PlusCircle } from '@phosphor-icons/react';  // Importa o ícone de círculo com mais (PlusCircle) da biblioteca Phosphor Icons
import { useState } from 'react';  // Importa o hook useState do React para gerenciar o estado

// Função Header que representa o componente do cabeçalho
export function Header() {
    // Estado que guarda o valor da nova tarefa sendo digitada
    const [NewTask , setNewTask] = useState ('');
   
    // Função para atualizar o estado NewTask sempre que o usuário digitar algo no campo de texto
    function handleNewTaskChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNewTask(event.target.value);  // Atualiza o estado com o novo valor do campo
    }

    // Função chamada quando o botão "Criar" é clicado
    // A função é responsável por impedir o envio do formulário e exibir o valor da nova tarefa no console
    function isNewTaskEmpty(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();  // Impede que o formulário seja enviado, evitando recarregar a página
        console.log(`${NewTask}`);  // Exibe o valor de NewTask no console
    }

    // Função chamada quando o campo de tarefa é inválido (não preenchido, por exemplo)
    // Está vazia no momento, mas pode ser usada para exibir mensagens de erro ou validações
    function handleNewTaskInvalid() {
        // Esta função pode ser implementada para tratar erros de validação do campo
    }

    // JSX que define a estrutura visual do componente
    return (
        <>
            <header className={style.header}>  {/* O cabeçalho com o logo e formulário */}
                <div>
                    <img src={todologo} alt="Logotipo Todo" />  {/* Exibe o logotipo do aplicativo */}
                    <form className={style.addingTask}>  {/* Formulário para adicionar uma nova tarefa */}
                        <textarea 
                            name="addingTask"  // Nome do campo de texto
                            placeholder="Adicione uma nova tarefa"  // Texto de placeholder no campo
                            value={NewTask}  // O valor do campo é controlado pelo estado NewTask
                            onChange={handleNewTaskChange}  // Função chamada quando o valor do campo muda
                            onInvalid={handleNewTaskInvalid}  // Função chamada se o campo for inválido
                            required  // O campo é obrigatório, não pode ser enviado vazio
                        />
                        <footer>
                            <button onClick={isNewTaskEmpty}>  {/* Botão para criar a tarefa */}
                                Criar
                                <PlusCircle size={18} className={style.plusCircle}/>  {/* Ícone do PlusCircle */}
                            </button>
                        </footer>
                    </form>
                </div>
            </header>
        </>
    );
}
