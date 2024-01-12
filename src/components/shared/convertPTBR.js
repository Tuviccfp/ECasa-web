export const convertPTBR = (date) => {
  try {
      const newDate = new Date(date);
      const options = {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      return newDate.toLocaleDateString('pt-BR', options);    
  } catch (error) {
    return {message: 'Não é possível converter o dado horas.'}
  }

};
