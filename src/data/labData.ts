// src/data/labData.ts
export type LabRow = {
    tarefa: string;

    // internal/external lab links
    hrefi?: string; // internal
    hrefe?: string; // external


    start: string;
    end: string;
    conteudo: string;
};

export const labData: LabRow[] = [
    {
        tarefa: "LAB00",
        hrefi: "/lab/LAB00", // internal page
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1748058", // external
        start: "18-Aug-2025",
        end: "25-Aug-2025",
        conteudo: "Apresentação da Disciplina; Materiais utilizados na disciplina;",
    },
    {
        tarefa: "LAB01",
        hrefi: "/lab/LAB01",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1948813", // external

        start: "25-Aug-2025",
        end: "01-Sep-2025",
        conteudo: "Revisão da programação em C;",
    },
    {
        tarefa: "LAB02",
        hrefi: "/lab/LAB02",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1761057", // external

        start: "01-Sep-2025",
        end: "08-Sep-2025",
        conteudo: "Processo de compilação, gravação e commit de código;",
    },
    {
        tarefa: "LAB03",
        hrefi: "/lab/LAB03",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1769726", // external

        start: "15-Sep-2025",
        end: "22-Sep-2025",
        conteudo: "Arquitetura de microcontroladores; Pinos de propósito geral (GPIO);",
        //  conteudo: "Interrupções via GPIO e Temporizadores (Timers);",
    },
    {
        tarefa: "LAB04",
        hrefi: "/lab/LAB04",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1770581", // external

        start: "22-Sep-2025",
        end: "29-Sep-2025",
        conteudo: "Interrupções via GPIO e Temporizadores (Timers);",
        //   conteudo: "Módulo PWM; Conversor ADC;",
    },
    {
        tarefa: "LAB05",
        hrefi: "/lab/LAB05",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1773187", // external

        start: "29-Sep-2025",
        end: "06-Oct-2025",
        conteudo: "Módulo PWM; Conversor ADC;",
        // conteudo: "DMA: Direct memory access (Acesso direto à memória);",
    },
    {
        tarefa: "LAB06",
        hrefi: "/lab/LAB06",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1776628", // external

        start: "06-Oct-2025",
        end: "13-Oct-2025",
        conteudo: "Uso do STM32CubeMonitor; Visualização de variáveis;",
    },
    {
        tarefa: "LAB07",
        hrefi: "/lab/LAB07",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1782502", // external

        start: "13-Oct-2025",
        end: "20-Oct-2025",
        //  conteudo: "Uso do STM32CubeMonitor; Visualização de variáveis;",
        conteudo: "DMA: Direct memory access (Acesso direto à memória);",
        // conteudo: "Uso do STM32CubeMonitor; MQTT, IoT;",
    },
    {
        tarefa: "LAB08",
        hrefi: "/lab/LAB08",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1783994", // external

        start: "03-Nov-2025",
        end: "10-Nov-2025",
        conteudo: "Uso do STM32CubeMonitor; MQTT, IoT;",
        // conteudo: "Uso do STM32CubeMonitor; InfluDB;",
    },
    {
        tarefa: "LAB09",
        hrefi: "/lab/LAB09",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external

        start: "10-Nov-2025",
        end: "17-Nov-2025",
        // conteudo: "Uso do STM32CubeMonitor; InfluDB;",
        conteudo: "Introdução ao uso do PlatformIO;",
        // conteudo: "FreeRTOS: Tarefas, Filas e Semáforos;",
    },
    {
        tarefa: "LAB10",
        hrefi: "/lab/LAB10",
        hrefe: "https://moodle.utfpr.edu.br/mod/assign/view.php?id=1889891", // external

        start: "10-Nov-2025",
        end: "17-Nov-2025",
        // conteudo: "Uso do STM32CubeMonitor; InfluDB;",
        conteudo: "Introdução ao FreeRTOS;",
        // conteudo: "FreeRTOS: Tarefas, Filas e Semáforos;",
    },

];
// src/components/LabTable.tsx