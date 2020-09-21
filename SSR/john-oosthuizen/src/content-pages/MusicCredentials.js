import React from 'react';

function MusicCredentials() {
    return (
        <div>
            <h2>Music credentials</h2>
            <table>
                <tr>
                    <th width="30%">Institution</th>
                    <th width="35%">Qualification</th>
                    <th width="30%">Downloadable Document</th>
                </tr>   
                <tr>
                    <td rowspan="2">Stellenbosch University</td>
                    <td>BMus Honours (cum laude) - Organ (2019)</td>
                    <td><a  href="http://bit.ly/jo-su-bmushons-eng" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            Certificate
                        </a>
                    </td>
                </tr> 
                <tr>
                    <td>Academic Record (Dec 2019)</td>   
                    <td><a      href="http://bit.ly/jo-su-acrec-2019dec" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            Academic Record (Dec 2019)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>University of North Carolina at Greensboro, USA</td>
                    <td>2020 Exchange Semester (Jan-May 2020)</td>
                    <td><a      href="http://bit.ly/jo-uncg-transcript" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            Academic Transcript
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>Trinity College</td>
                    <td>ATCL (Piano)</td>
                    <td><a      href="http://bit.ly/jo-atcl-piano-1975" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            Diploma
                        </a>
                    </td>
                </tr> 
                <tr>
                    <td colspan="2">Music CV</td>
                    <td><a      href="http://bit.ly/jo-music-cv-eng-2020apr" 
                                target="_blank" 
                                rel="noopener noreferrer">
                            Music CV
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Academic and character reference letters are available on request. 
                    The music CV contains a comprehensive list of academic and character references.</td>
                </tr>
            </table>
        </div>
    );
}

export default MusicCredentials;