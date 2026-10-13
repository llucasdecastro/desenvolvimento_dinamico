export function validarTitulo(valor: string): string | null {
  const titulo = valor?.trim() ?? '';

  if (!titulo) {
    return 'O título não pode ficar em branco.';
  }

  if (titulo.length < 5 || titulo.length > 80) {
    return 'O título deve ter entre 5 e 80 caracteres.';
  }

  return null;
}

export function validarData(valor: string): string | null {
  if (!valor) {
    return 'A data é obrigatória.';
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataEvento = new Date(`${valor}T00:00:00`);

  if (Number.isNaN(dataEvento.getTime())) {
    return 'Informe uma data válida.';
  }

  if (dataEvento < hoje) {
    return 'A data não pode estar no passado.';
  }

  return null;
}

export function validarLocal(valor: string): string | null {
  if (!valor?.trim()) {
    return 'O local não pode ficar em branco.';
  }

  return null;
}

export function validarEmailResponsavel(valor: string): string | null {
  const email = valor?.trim() ?? '';

  if (!email) {
    return 'O e-mail do responsável é obrigatório.';
  }

  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoEmail.test(email)) {
    return 'E-mail em formato inválido.';
  }

  return null;
}

export function validarVagas(valor: number | string): string | null {
  if (valor === '' || valor === null || valor === undefined) {
    return 'A quantidade de vagas é obrigatória.';
  }

  const vagas = Number(valor);

  if (!Number.isInteger(vagas) || vagas < 1 || vagas > 200) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  return null;
}