export class CreatePedidoDto {
    idCliente: number;
    clienteNome: string;
    clienteEndereco: string;
    funcionario: string;
    dataEntrada: Date;
    horaEntrada: string;
    dataPrevEntrega: Date;
    horaPrevEntrega: string;
    minPrevEntrega: string;
    observacoes: string;
    precoLevaTraz: number;
    precoServicoExpresso: number;
    descontoReais: number;
    precoTotal: number;
    ativo: boolean;
    status: string;
}
